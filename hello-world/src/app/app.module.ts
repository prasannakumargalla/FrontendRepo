import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerRegComponent } from './customer-reg/customer-reg.component';

import {HttpClientModule} from '@angular/common/http';
import { AddTutorialComponent } from './add-tutorial/add-tutorial.component';


@NgModule({
  declarations: [
    AppComponent,
    CustomerRegComponent,
    AddTutorialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
