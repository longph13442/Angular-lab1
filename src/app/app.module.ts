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
import { ReactiveFormsModule } from '@angular/forms';
import { ValidateComponent } from './compnent/validate/validate.component';
import { UserComponent } from './user/user.component';
import { ListComponent } from './user/list/list.component';
import { UserFormComponent } from './user/user-form/user-form.component';
import { ClientLayoutComponent } from './layout/client-layout/client-layout.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { ProductsComponent } from './layout/client-layout/products/products.component';
import { DetailComponent } from './layout/admin-layout/detail/detail.component';
import { CreateComponent } from './layout/admin-layout/create/create.component';
import { UpdateComponent } from './layout/admin-layout/update/update.component'; // import form
import { FormAdminComponent } from './layout/admin-layout/form/form.component';
import {ListComponent as ProductListComponent} from './layout/admin-layout/list/list.component';

// module sử dụng để gọi api
import {HttpClientModule} from '@angular/common/http';
import { SignUpComponent } from './layout/sign-up/sign-up.component';
import { SigninComponent } from './layout/signin/signin.component';


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
    ValidateComponent,
    UserComponent,
    ListComponent,
    UserFormComponent,
    ClientLayoutComponent,
    AdminLayoutComponent,
    ProductsComponent,
    DetailComponent,
    CreateComponent,
    UpdateComponent,
    FormAdminComponent,
    ProductListComponent,
    SignUpComponent,
    SigninComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
