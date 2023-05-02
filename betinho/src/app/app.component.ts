import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '@core/auth/authentication.service';
import { UserAuth } from '@core/auth/user';
import { HttpStatusEnum } from '@core/http-interceptors/http-status';
import { DialogService } from '@core/services/dialog.service';
import { environment } from '@env/environment';
import { NzModalService } from 'ng-zorro-antd/modal';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isCollapsed = false;
  isLoggedIn$: Observable<boolean>;

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
    private modalService: NzModalService,
    private dialogService: DialogService) {
    console.info(`App Version: ${environment.version}`);
    this.isLoggedIn$ = this.authenticationService.isLoggedIn;
  }

  ngOnInit(): void {
    /* this.breakpointObserver.observe([
      Breakpoints.Handset
    ]).subscribe((data)=>{
      this.isCollapsed = data.matches;
    }); */
  }

  get usuarioLogado(): UserAuth {
    return this.authenticationService.currentUserValue;
  }

  logout(): void {
    this.dialogService.confirm('Deseja realmente sair do sistema?', () => {
      this.authenticationService.logout();
    })
  }
}