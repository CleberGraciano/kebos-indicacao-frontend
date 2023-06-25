import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteAction } from '@core/action/action';
import { AuthGuardService } from '@core/auth/auth-guard.service';
import { SellerFormComponent } from './pages/seller-form/seller-form.component';
import { SellerListComponent } from './pages/seller-list/seller-list.component';
import { PermissoesEnum } from '@core/auth/user';
import { NgxPermissionsGuard } from 'ngx-permissions';

const routes: Routes = [
  {
    path:'',
    component: SellerListComponent,
    canActivate:[AuthGuardService, NgxPermissionsGuard],
    data: {
      breadcrumb: "Lista",
      acao: RouteAction.Insert,
      permissions: {
        only: [PermissoesEnum.Adm, PermissoesEnum.Moderador],
        redirectTo: '/'
      }
    },
    children: [
      {
        path: 'insert',
        component: SellerFormComponent,
        canActivate: [AuthGuardService, NgxPermissionsGuard],
        data: {
          breadcrumb: "Cadastrar",
          acao: RouteAction.Insert,
          permissions: {
            only: [PermissoesEnum.Adm, PermissoesEnum.Moderador],
            redirectTo: '/'
          }
        },
      },
      {
        path: 'edit/:param',
        component: SellerFormComponent,
        canActivate: [AuthGuardService, NgxPermissionsGuard],
        data: {
          breadcrumb: "Editar",
          acao: RouteAction.Edit,
          only: [PermissoesEnum.Adm, PermissoesEnum.Moderador],
        },
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SellerRoutingModule { }
