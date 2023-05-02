import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteAction } from '@core/action/action';
import { AuthGuardService } from '@core/auth/auth-guard.service';
import { SellerFormComponent } from './pages/seller-form/seller-form.component';
import { SellerListComponent } from './pages/seller-list/seller-list.component';

const routes: Routes = [
  {
    path:'',
    component: SellerListComponent,
    //canActivate:[AuthGuardService],
    children: [
      {
        path: 'insert',
        component: SellerFormComponent,
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
        component: SellerFormComponent,
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
export class SellerRoutingModule { }
