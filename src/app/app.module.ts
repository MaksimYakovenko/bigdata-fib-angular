import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BigdataFibAngularComponent } from './bigdata-fib-angular/bigdata-fib-angular.component';

@NgModule({
  declarations: [
    AppComponent,
    BigdataFibAngularComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
