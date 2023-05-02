import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { SellerFormComponent } from './pages/seller-form/seller-form.component';
import { SellerListComponent } from './pages/seller-list/seller-list.component';
import { SellerRoutingModule } from './seller-routing.module';


@NgModule({
  declarations: [
    SellerListComponent,
    SellerFormComponent
  ],
  imports: [
    SharedModule,
    SellerRoutingModule
  ]
})
export class SellerModule { }
