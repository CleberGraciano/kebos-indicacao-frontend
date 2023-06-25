import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '@core/auth/authentication.service';
import { PermissoesEnum } from '@core/auth/user';
import { DialogService } from '@core/services/dialog.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  nameUser: string | undefined;
  permissaoAdmEModerador = [PermissoesEnum.Adm, PermissoesEnum.Moderador]
  permissaoTodos = [PermissoesEnum.Adm, PermissoesEnum.Moderador, PermissoesEnum.User]

  constructor(
    private authenticationService: AuthenticationService,
    private dialogService: DialogService
  ) { }

  ngOnInit(): void {
    this.nameUser = this.authenticationService?.currentUserValue?.displayName;
  }

  logout(): void {
    this.dialogService.confirm('Deseja realmente sair do sistema?', () => {
      this.authenticationService.logout();
    })
  }

}
