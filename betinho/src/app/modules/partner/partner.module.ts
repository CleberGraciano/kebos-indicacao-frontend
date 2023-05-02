import { NgModule } from '@angular/core';
import { PartnerRoutingModule } from './partner-routing.module';
import { SharedModule } from '@shared/shared.module';
import { PartnerListComponent } from './pages/partner-list/partner-list.component';
import { PartnerFormComponent } from './pages/partner-form/partner-form.component';


@NgModule({
  declarations: [
    PartnerListComponent,
    PartnerFormComponent
  ],
  imports: [
    SharedModule,
    PartnerRoutingModule
  ]
})
export class PartnerModule { }
