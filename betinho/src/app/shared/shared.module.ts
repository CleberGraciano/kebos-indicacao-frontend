import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconsProviderModule } from '../icons-provider.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material.module';
import { customPaginatorIntl } from '@core/config/mat-table-config';
import { DynamicFormModule } from './components/dynamic-form/dynamic-form.module';
import { TextMaskModule } from 'angular2-text-mask';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoaderInterceptorService } from './components/loader/loader-interceptor.service';
import { LoaderComponent } from './components/loader/loader.component';
import { BrDate } from './pipes/br-date.pipe';
import { BlockCopyPasteCutDirective } from './directives/block-copy-past-cut.directive';
import { TextConfirmComponent } from './components/text-confirm/text-confirm.component';
import { NgZorroModule } from './ngzorro.module';
import { NgxPermissionsModule } from 'ngx-permissions';
import { CPFPipe } from './pipes/cpf.pipe';
import { ArraySortPipe } from './pipes/sort-array.pipe';
import { HtmlEditorComponent } from './components/html-editor/html-editor.component';

@NgModule({
  declarations: [
    LoaderComponent,
    BrDate,
    BlockCopyPasteCutDirective,
    TextConfirmComponent,
    CPFPipe,
    ArraySortPipe,
    HtmlEditorComponent,
  ],
  imports: [
    CommonModule,
    IconsProviderModule,
    NgZorroModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MaterialModule,
    DynamicFormModule,
    TextMaskModule,
    NgxPermissionsModule.forChild(),
  ],
  exports:[
    IconsProviderModule,
    NgZorroModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MaterialModule,
    DynamicFormModule,
    TextMaskModule,
    LoaderComponent,
    BrDate,
    BlockCopyPasteCutDirective,
    TextConfirmComponent,
    CPFPipe,
    ArraySortPipe,
  ],
  providers:[
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptorService, multi: true },
  ]
})
export class SharedModule { }
