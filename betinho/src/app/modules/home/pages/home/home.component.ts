import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '@core/auth/authentication.service';
import { PermissoesEnum } from '@core/auth/user';
import { DialogService } from '@core/services/dialog.service';
import { RecommendationService } from '@modules/recommendation/recommendation.service';
import { count } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  nameUser: string | undefined;
  permissaoAdmEModerador = [PermissoesEnum.Adm, PermissoesEnum.Moderador]
  permissaoTodos = [PermissoesEnum.Adm, PermissoesEnum.Moderador, PermissoesEnum.User]
  permissaoModeradorEUser = [PermissoesEnum.Moderador, PermissoesEnum.User]

  listRecommendation: any[] = [];
  initLoading = true; // bug
  loadingMore = false;
  data: any[] = [];
  list: Array<{ loading: boolean; name: any }> = [];
  statusSelect!: string;
  listStatusRecommendation: any[] = [];

  constructor(
    private authenticationService: AuthenticationService,
    private dialogService: DialogService,
    private serviceRecommendation: RecommendationService
  ) { }

  ngOnInit(): void {
    this.nameUser = this.authenticationService?.currentUserValue?.displayName;
    this.serviceRecommendation.getStatusRecommendation().subscribe((res) => this.listStatusRecommendation = res);
  }

  getListRecommendation(status: string) {
    this.serviceRecommendation.getListRecommendation(status).subscribe((res: any) => {
      this.data = res.results;
      this.list = res.results;
      this.initLoading = false;
    });
  }

  onLoadMore(): void {
    this.loadingMore = true;
    this.list = this.data.concat([...Array(count)].fill(<any>{}).map(() => ({ loading: true, name: {} })));
    this.getListRecommendation(this.statusSelect);
  }

  logout(): void {
    this.dialogService.confirm('Deseja realmente sair do sistema?', () => {
      this.authenticationService.logout();
    })
  }

}
