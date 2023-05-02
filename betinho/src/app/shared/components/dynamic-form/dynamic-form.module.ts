import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { ControlErrorDirective } from './directives/control-error/control-error.directive';
import { ControlErrorComponent } from './components/control-error/control-error.component';
import { ControlErrorContainerDirective } from './directives/control-error/control-error-container.directive';
import { TestDirective } from '@shared/test.directive';
import { FormSubmitDirective } from './directives/form-submit/form-submit.directive';


@NgModule({
  declarations: [
    FormSubmitDirective,
    ControlErrorDirective,
    ControlErrorComponent,
    ControlErrorContainerDirective,
    ControlErrorComponent,
    TestDirective
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule 
  ],
  exports: [
    FormSubmitDirective,
    ControlErrorDirective,
    ControlErrorComponent,
    ControlErrorContainerDirective,
    ControlErrorComponent,
    TestDirective
  ],
  entryComponents: [
    ControlErrorComponent,
  ]
})
export class DynamicFormModule { }
