import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { SignupRoutingModule } from './signup-routing.module';
import { SignupComponent } from './pages/signup/signup.component';
import { StatusSignupModalComponent } from './components/status-signup-modal/status-signup-modal.component';

@NgModule({
  declarations: [
    SignupComponent,
    StatusSignupModalComponent
  ],
  imports: [
    SharedModule,
    SignupRoutingModule
  ],
  exports: [
    StatusSignupModalComponent
  ]
})
export class SignupModule { }
