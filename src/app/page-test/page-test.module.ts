import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactFormComponent } from './react-form/react-form.component';
import { AnimatedFormComponent } from './animated-form/animated-form.component';



@NgModule({
  declarations: [
    FormComponent,
    ReactFormComponent,
    AnimatedFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    FormComponent,
    ReactFormComponent,
    AnimatedFormComponent
  ]
})
export class PageTestModule { }
