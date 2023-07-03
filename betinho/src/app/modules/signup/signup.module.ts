import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { SignupRoutingModule } from './signup-routing.module';
import { SignupComponent } from './pages/signup/signup.component';

@NgModule({
  declarations: [
    SignupComponent
  ],
  imports: [
    SharedModule,
    SignupRoutingModule
  ]
})
export class SignupModule { }
