import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { AuthenticationService } from '@core/auth/authentication.service';
import { UserAuth } from '@core/auth/user';
import { HttpStatusEnum } from '@core/http-interceptors/http-status';
import { DialogService } from '@core/services/dialog.service';
import { environment } from '@env/environment';
import { NzModalService } from 'ng-zorro-antd/modal';
import { Observable, filter, map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isCollapsed = false;
  isLoggedIn$: Observable<boolean>;
  urlAtual: boolean = false;

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
    private modalService: NzModalService,
    private dialogService: DialogService,
    private activedRouted: ActivatedRoute) {
    console.info(`App Version: ${environment.version}`);
    this.isLoggedIn$ = this.authenticationService.isLoggedIn;
  }

  ngOnInit(): void {
    this.router.events.pipe(
      filter((event: any) => event instanceof NavigationEnd),
      map((event: NavigationEnd) => {
        return { event, route: this.rootRoute(this.activedRouted) };
      })
    ).subscribe((data: { event: NavigationEnd, route: ActivatedRoute }) => {
      if (data.route.snapshot.data?.['layout']?.padrao == undefined) {
        this.urlAtual = false
      } else {
        this.urlAtual = true
      }
    });
    
    /* this.breakpointObserver.observe([
      Breakpoints.Handset
    ]).subscribe((data)=>{
      this.isCollapsed = data.matches;
    }); */
  }

  private rootRoute(route: ActivatedRoute): ActivatedRoute {
    while (route.firstChild) {
      route = route.firstChild;
    }
    return route;
  }

  logout(): void {
    this.dialogService.confirm('Deseja realmente sair do sistema?', () => {
      this.authenticationService.logout();
    })
  }

  get usuarioLogado(): UserAuth {
    return this.authenticationService.currentUserValue;
  }
}