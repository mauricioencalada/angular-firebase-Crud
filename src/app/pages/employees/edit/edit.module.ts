import { EmployeeFormModule } from './../../../shared/components/employee-form/employee-form.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditRoutingModule } from './edit-routing.module';
import { EditComponent } from './edit.component';


@NgModule({
  declarations: [
    EditComponent
  ],
  imports: [
    CommonModule,
    EditRoutingModule,
    ReactiveFormsModule,
    EmployeeFormModule
  ]
})
export class EditModule { }
