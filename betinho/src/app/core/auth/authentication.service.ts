import { Injectable } from '@angular/core';
import { HttpParams, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map, delay, tap, concatMap } from 'rxjs/operators';
import { UserAuth } from './user';
import { environment } from '@env/environment';
import { LocalStorageService } from '@core/local-storage/local-storage.service';
import { Router } from '@angular/router';
import { ApiService } from '@core/services/api.service';
import { LoaderService } from '@shared/components/loader/loader.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { NgxPermissionsService } from 'ngx-permissions';

const routes = {
    login: `signin`,
    forgotPassword: `email/forgot-password`,
    changePassword: `user/changepasswd`
}

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<any>;
    public currentUser: Observable<UserAuth>;
    private loggedIn = new BehaviorSubject<boolean>(false);

    constructor(private apiService: ApiService,
        private localStorageService: LocalStorageService,
        private router: Router,
        private loaderService: LoaderService,
        private permissionService: NgxPermissionsService) {
        this.currentUserSubject = new BehaviorSubject<UserAuth>(JSON.parse(localStorageService.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
        this.loggedIn = new BehaviorSubject<boolean>(localStorageService.getItem('token') != undefined);
    }

    public get isLoggedIn() {
        return this.loggedIn.asObservable().pipe(delay(0));
    }

    public get currentUserValue(): UserAuth {
        return this.currentUserSubject.value;
    }

    public get isLoged(): boolean {
        return this.loggedIn.value;
    }

    login(email: string, password: string) {
        let dataInfo = { email, password };
        return this.apiService.post<any>(environment.auth + routes.login, dataInfo)
            .pipe(tap(res => {
                return res;
            }),
                concatMap((res) => {
                    if (res.accessToken) {
                      let helper = new JwtHelperService();
                      let dados = helper.decodeToken(res.accessToken)
                      let dadosUsuario = { ...<UserAuth>dados, ...res.user };
                      this.localStorageService.setItem('token', JSON.stringify(res.accessToken));
                      this.setCurrentUser(dadosUsuario);

                      const permissions = <any>[];
                      dadosUsuario.roles.forEach((x: any) => permissions.push(x));
                      this.permissionService.loadPermissions(permissions);
                      console.log(dadosUsuario.roles)

                      this.loggedIn.next(true);
                    }
                    return of(res);
                }),
                map((data: UserAuth) => {
                    return data;
                }));
    }

    forgotPassword(email: string) {
        return this.apiService.post<string>(routes.forgotPassword, email);
    }

    logout(setReturnUrl?: boolean, message?: string) {
        if (!this.router.url.startsWith('/login')) {

            let logoutCall = () => {
                this.localStorageService.removeItem('currentUser');
                this.localStorageService.removeItem('token');
                this.currentUserSubject.next(null);
                this.loggedIn.next(false);
                this.loaderService.hide();

                if (setReturnUrl)
                    this.router.navigate(['/login'], { queryParams: { returnUrl: this.router.url, msg: message } });
                else
                    this.router.navigate(['/login'], { queryParams: { msg: message } });
            };
            logoutCall();
        }
    }

    changePassword(obj: any, token: string) {
        let header = new HttpHeaders();
        header = header.append('Authorization', token);
        return this.apiService.post<any>(routes.changePassword, obj,false, header);
    }

    setCurrentUser(dadosUsuario: any) {
        this.localStorageService.setItem('currentUser', JSON.stringify(dadosUsuario));
        this.currentUserSubject.next(dadosUsuario);
    }
}
