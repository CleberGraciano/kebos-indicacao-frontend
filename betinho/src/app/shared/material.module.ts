import { NgModule } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  declarations: [],
  imports: [
    MatSortModule,
    MatPaginatorModule,
    MatTableModule,
    MatCheckboxModule
  ],
  exports: [
    MatSortModule,
    MatPaginatorModule,
    MatTableModule,
    MatCheckboxModule
  ]
})
export class MaterialModule { }
