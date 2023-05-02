import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteAction } from '@core/action/action';
import { AuthGuardService } from '@core/auth/auth-guard.service';
import { ItemFormComponent } from './pages/item-form/item-form.component';
import { ItemListComponent } from './pages/item-list/item-list.component';

const routes: Routes = [
  {
    path:'',
    component: ItemListComponent,
    //canActivate:[AuthGuardService],
    children: [
      {
        path: 'insert',
        component: ItemFormComponent,
        //canActivate: [AuthGuardService, NgxPermissionsGuard],
        data: {
          acao: RouteAction.Insert,
          // permissions: {
          //   only: [PermissionEnum.Administrador, PermissionEnum.Gestor, PermissionEnum.Colaborador],
          //   redirectTo: '/'
          // }
        },
      },
      {
        path: 'edit/:param',
        component: ItemFormComponent,
        //canActivate: [AuthGuardService, NgxPermissionsGuard],
        data: {
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
export class ItemRoutingModule { }
