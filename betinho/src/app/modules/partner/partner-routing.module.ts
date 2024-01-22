import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteAction } from '@core/action/action';
import { AuthGuardService } from '@core/auth/auth-guard.service';
import { PartnerFormComponent } from './pages/partner-form/partner-form.component';
import { PartnerListComponent } from './pages/partner-list/partner-list.component';
import { NgxPermissionsGuard } from 'ngx-permissions';
import { PermissoesEnum } from '@core/auth/user';

const routes: Routes = [
  {
    path:'',
    component: PartnerListComponent,
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
        component: PartnerFormComponent,
        canActivate: [AuthGuardService, NgxPermissionsGuard],
        data: {
          acao: RouteAction.Insert,
          permissions: {
            only: [PermissoesEnum.Adm, PermissoesEnum.Moderador],
            redirectTo: '/'
          }
        },
      },
      {
        path: 'edit/:param',
        component: PartnerFormComponent,
        canActivate: [AuthGuardService],
        data: {
          acao: RouteAction.Edit,
          // permissions: {
          //   only: [PermissoesEnum.Adm, PermissoesEnum.Moderador, PermissoesEnum.User],
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
