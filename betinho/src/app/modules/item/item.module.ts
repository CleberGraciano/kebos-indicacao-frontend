import { NgModule } from '@angular/core';
import { ItemRoutingModule } from './item-routing.module';
import { SharedModule } from '@shared/shared.module';
import { ItemListComponent } from './pages/item-list/item-list.component';
import { ItemFormComponent } from './pages/item-form/item-form.component';

@NgModule({
  declarations: [
    ItemListComponent,
    ItemFormComponent
  ],
  imports: [
    SharedModule,
    ItemRoutingModule
  ]
})
export class ItemModule { }
