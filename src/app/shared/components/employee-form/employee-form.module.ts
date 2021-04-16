import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeFormComponent } from './employee-form.component';



@NgModule({
  declarations: [EmployeeFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[EmployeeFormComponent]
})
export class EmployeeFormModule { }
