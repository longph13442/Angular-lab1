import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TableComponent } from './table/table.component';
import { Table2Component } from './table2/table2.component';
import { NameComponent } from './name/name.component';
import { IdentityComponent } from './identity/identity.component';
import { Condition1Component } from './lab1/condition1/condition1.component';
import { Condition2Component } from './lab1/condition2/condition2.component';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';
import { ValidateComponent } from './compnent/validate/validate.component'; // import form

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    Table2Component,
    NameComponent,
    IdentityComponent,
    Condition1Component,
    Condition2Component,
    FormComponent,
    ValidateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
