import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from '@core/auth/auth-guard.service';
import { HomeComponent } from './pages/home/home.component';
import { PermissoesEnum } from '@core/auth/user';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuardService],
    data: {
      layout: {
        padrao: false
      },
      permissions: {
        only: [PermissoesEnum.Adm, PermissoesEnum.Moderador, PermissoesEnum.User],
        redirectTo: '/'
      }
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
