import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactFormComponent } from './react-form/react-form.component';



@NgModule({
  declarations: [
    FormComponent,
    ReactFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    FormComponent,
    ReactFormComponent
  ]
})
export class PageTestModule { }
