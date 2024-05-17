import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteAction } from '@core/action/action';
import { AuthGuardService } from '@core/auth/auth-guard.service';
import { RecommendationFormComponent } from './pages/recommendation-form/recommendation-form.component';
import { RecommendationListComponent } from './pages/recommendation-list/recommendation-list.component';
import { NgxPermissionsGuard } from 'ngx-permissions';
import { PermissoesEnum } from '@core/auth/user';
import { RecommendationStatusComponent } from './pages/recommendation-status/recommendation-status.component';

const routes: Routes = [
  {
    path: '',
    component: RecommendationListComponent,
    canActivate: [AuthGuardService],
    data: {
      breadcrumb: 'Lista',
      acao: RouteAction.Insert,
      permissions: {
        only: [
          PermissoesEnum.Adm,
          PermissoesEnum.User,
          PermissoesEnum.Moderador,
        ],
        redirectTo: '/',
      },
    },
    children: [
      {
        path: 'insert',
        component: RecommendationFormComponent,
        canActivate: [AuthGuardService, NgxPermissionsGuard],
        data: {
          breadcrumb: 'Cadastrar',
          acao: RouteAction.Insert,
          permissions: {
            only: [PermissoesEnum.Adm, PermissoesEnum.User],
            redirectTo: '/',
          },
        },
      },
      // This route shouldn't be used.
      // Editing recommendations is NOT a feature.
      // {
      //   path: 'edit/:param',
      //   component: RecommendationFormComponent,
      //   canActivate: [AuthGuardService, NgxPermissionsGuard],
      //   data: {
      //     breadcrumb: 'Editar',
      //     acao: RouteAction.Edit,
      //     permissions: {
      //       only: [PermissoesEnum.Adm, PermissoesEnum.User],
      //       redirectTo: '/',
      //     },
      //   },
      // },
      {
        path: 'status/edit/:param',
        component: RecommendationStatusComponent,
        canActivate: [AuthGuardService, NgxPermissionsGuard],
        data: {
          breadcrumb: 'Editar',
          acao: RouteAction.Edit,
          permissions: {
            only: [PermissoesEnum.Adm, PermissoesEnum.Moderador],
            redirectTo: '/',
          },
        },
      },
      {
        path: 'view/:param',
        component: RecommendationFormComponent,
        canActivate: [AuthGuardService, NgxPermissionsGuard],
        data: {
          breadcrumb: 'Visualizar',
          acao: RouteAction.View,
          permissions: {
            only: [PermissoesEnum.Adm, PermissoesEnum.Moderador],
            redirectTo: '/',
          },
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecommendationRoutingModule {}
