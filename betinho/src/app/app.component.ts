import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { AuthenticationService } from '@core/auth/authentication.service';
import { PermissoesEnum, UserAuth } from '@core/auth/user';
import { DialogService } from '@core/services/dialog.service';
import * as dayjs from 'dayjs';
import { NzModalService } from 'ng-zorro-antd/modal';
import { Observable, filter, map } from 'rxjs';
import { ModalOptions } from 'ng-zorro-antd/modal';
import { StatusSignupModalComponent } from '@modules/signup/components/status-signup-modal/status-signup-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isCollapsed = false;
  isLoggedIn$: Observable<boolean>;
  urlAtual: boolean = false;
  permissaoAdm = PermissoesEnum.Adm;
  permissaoModerador = PermissoesEnum.Moderador;
  permissaoUser = PermissoesEnum.User;
  yearActual = dayjs().year();

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
    private modalService: NzModalService,
    private dialogService: DialogService,
    private activedRouted: ActivatedRoute) {
    this.isLoggedIn$ = this.authenticationService.isLoggedIn;
    this.router.config.some(route => (route.path === '') ? this.router.navigate(['/login']) : null);
  }

  ngOnInit(): void {
    this.router.events.pipe(
      filter((event: any) => event instanceof NavigationEnd),
      map((event: NavigationEnd) => {
        return { event, route: this.rootRoute(this.activedRouted) };
      })
    ).subscribe((data: { event: NavigationEnd, route: ActivatedRoute }) => {
      this.validarCadastro(data);
      if (data.route.snapshot.data?.['layout']?.padrao == undefined) {
        this.urlAtual = false
      } else {
        this.urlAtual = true
      }
    });
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

  validarCadastro(data: any) {
    let statusCadastro = this.usuarioLogado?.statusCadastro;
    let urlEditPartner = data.event.url.includes('partner/edit');
    let urlLogin = data.event.url.includes('/login');
    (!statusCadastro && !urlEditPartner && !urlLogin) ? this.statusSignupModal() : null;
  }

  statusSignupModal(): void {
    const modalStatusSignup = this.modalService.create({
      nzContent: StatusSignupModalComponent,
      //nzTitle: 'Atualizar Cadastro',
      nzCentered: true,
      nzFooter: null,
      //nzMaskClosable: false,
      nzClosable: true,
      nzClassName: 'modal-status-signup'
    });
    modalStatusSignup.afterClose.subscribe((boolean) => boolean ? this.router.navigate([`/partner/edit/${this.usuarioLogado.id}`]) : this.authenticationService.logout());
  }

  get usuarioLogado(): UserAuth {
    return this.authenticationService.currentUserValue;
  }
}
