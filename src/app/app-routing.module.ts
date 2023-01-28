import { ReactFormComponent } from './page-test/react-form/react-form.component';
import { FormComponent } from './page-test/form/form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'form', component:FormComponent},
  {path:'react', component:ReactFormComponent},
  {path:'', redirectTo:'/form', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
