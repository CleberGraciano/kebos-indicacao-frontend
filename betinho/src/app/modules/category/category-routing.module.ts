import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryListComponent } from './pages/category-list/category-list.component';
import { AuthGuardService } from '@core/auth/auth-guard.service';
import { NgxPermissionsGuard } from 'ngx-permissions';
import { PermissoesEnum } from '@core/auth/user';
import { RouteAction } from '@core/action/action';
import { CategoryFormComponent } from './pages/category-form/category-form.component';

const routes: Routes = [
  {
    path:'',
    component: CategoryListComponent,
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
        component: CategoryFormComponent,
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
        component: CategoryFormComponent,
        canActivate: [AuthGuardService, NgxPermissionsGuard],
        data: {
          acao: RouteAction.Edit,
          permissions: {
            only: [PermissoesEnum.Adm, PermissoesEnum.Moderador],
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
export class CategoryRoutingModule { }
