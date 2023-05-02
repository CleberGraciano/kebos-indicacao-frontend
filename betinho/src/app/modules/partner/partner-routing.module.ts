import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteAction } from '@core/action/action';
import { AuthGuardService } from '@core/auth/auth-guard.service';
import { PartnerFormComponent } from './pages/partner-form/partner-form.component';
import { PartnerListComponent } from './pages/partner-list/partner-list.component';

const routes: Routes = [
  {
    path:'',
    component: PartnerListComponent,
    //canActivate:[AuthGuardService],
    children: [
      {
        path: 'insert',
        component: PartnerFormComponent,
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
        component: PartnerFormComponent,
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
export class PartnerRoutingModule { }
