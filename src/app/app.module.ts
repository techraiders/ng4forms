import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { FormsComponent } from './forms.component';
import { DataDrivenComponent } from './data-driven/data-driven.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';

@NgModule({
  declarations: [
    FormsComponent,
    DataDrivenComponent,
    TemplateDrivenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [FormsComponent]
})
export class AppModule { }
