import { NgModule } from '@angular/core';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    SharedModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
