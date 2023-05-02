import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { map, take } from 'rxjs/operators';
import { AuthenticationService } from '@core/auth/authentication.service';
import { Observable } from 'rxjs';
import { NgxPermissionsService } from 'ngx-permissions';

@Injectable()
export class AuthGuardService implements CanActivate {

    constructor(private router: Router, private authenticationService: AuthenticationService,
        private permissionsService: NgxPermissionsService) { }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        if (!this.authenticationService.isLoged) {
            this.router.navigate(['/login']);
        }
        return true;
    }

}
