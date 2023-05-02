import { NgModule } from '@angular/core';
import { PartnerFormComponent } from './pages/partner-form/partner-form.component';
import { PartnerRoutingModule } from './partiner-routing.module';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [
    PartnerFormComponent
  ],
  imports: [
    SharedModule,
    PartnerRoutingModule
  ]
})
export class PartnerModule { }
