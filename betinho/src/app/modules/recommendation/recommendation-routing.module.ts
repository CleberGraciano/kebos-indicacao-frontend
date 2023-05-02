import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteAction } from '@core/action/action';
import { AuthGuardService } from '@core/auth/auth-guard.service';
import { RecommendationFormComponent } from './pages/recommendation-form/recommendation-form.component';
import { RecommendationListComponent } from './pages/recommendation-list/recommendation-list.component';

const routes: Routes = [
  {
    path:'',
    component: RecommendationListComponent,
    //canActivate:[AuthGuardService],
    children: [
      {
        path: 'insert',
        component: RecommendationFormComponent,
        //canActivate: [AuthGuardService, NgxPermissionsGuard],
        data: {
          breadcrumb: "Cadastrar",
          acao: RouteAction.Insert,
          // permissions: {
          //   only: [PermissionEnum.Administrador, PermissionEnum.Gestor, PermissionEnum.Colaborador],
          //   redirectTo: '/'
          // }
        },
      },
      {
        path: 'edit/:param',
        component: RecommendationFormComponent,
        //canActivate: [AuthGuardService, NgxPermissionsGuard],
        data: {
          breadcrumb: "Editar",
          acao: RouteAction.Edit,
          // permissions: {
          //   only: [PermissionEnum.Administrador, PermissionEnum.Gestor, PermissionEnum.Colaborador],
          //   redirectTo: '/'
          // }
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
