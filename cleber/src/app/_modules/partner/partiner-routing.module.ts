import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { AuthGuardService } from '@core/auth/auth-guard.service';


const routes: Routes = [
  // {
  //   path:'',
  //   component: ColaboradorListComponent,
  //   canActivate:[AuthGuardService]
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PartnerRoutingModule { }
