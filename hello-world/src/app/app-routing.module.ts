import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerRegComponent } from './customer-reg/customer-reg.component';
import { AddTutorialComponent } from './add-tutorial/add-tutorial.component';

const routes: Routes = [

  
  { path: 'CustomerRegistartion', component: CustomerRegComponent },
  { path: 'AddTutorial', component: AddTutorialComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
