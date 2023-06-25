import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteAction } from '@core/action/action';
import { AuthGuardService } from '@core/auth/auth-guard.service';
import { RecommendationFormComponent } from './pages/recommendation-form/recommendation-form.component';
import { RecommendationListComponent } from './pages/recommendation-list/recommendation-list.component';
import { NgxPermissionsGuard } from 'ngx-permissions';
import { PermissoesEnum } from '@core/auth/user';

const routes: Routes = [
  {
    path:'',
    component: RecommendationListComponent,
    canActivate:[AuthGuardService],
    data: {
      breadcrumb: "Lista",
      acao: RouteAction.Insert,
      permissions: {
        only: [PermissoesEnum.Adm, PermissoesEnum.User, PermissoesEnum.Moderador],
        redirectTo: '/'
      }
    },
    children: [
      {
        path: 'insert',
        component: RecommendationFormComponent,
        canActivate: [AuthGuardService, NgxPermissionsGuard],
        data: {
          breadcrumb: "Cadastrar",
          acao: RouteAction.Insert,
          permissions: {
            only: [PermissoesEnum.Adm, PermissoesEnum.User],
            redirectTo: '/'
          }
        },
      },
      {
        path: 'edit/:param',
        component: RecommendationFormComponent,
        canActivate: [AuthGuardService, NgxPermissionsGuard],
        data: {
          breadcrumb: "Editar",
          acao: RouteAction.Edit,
          permissions: {
            only: [PermissoesEnum.Adm, PermissoesEnum.User],
            redirectTo: '/'
          }
        },
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecommendationRoutingModule { }
