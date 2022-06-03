import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { CreateComponent } from './layout/admin-layout/create/create.component';
import { ListComponent } from './layout/admin-layout/list/list.component';
import { UpdateComponent } from './layout/admin-layout/update/update.component';
import { ClientLayoutComponent } from './layout/client-layout/client-layout.component';
import { HomepageComponent } from './layout/client-layout/homepage/homepage.component';
import { ProductsDetailComponent } from './layout/client-layout/products-detail/products-detail.component';
import { ProductsComponent } from './layout/client-layout/products/products.component';


const routes: Routes = [
  // {
  //   path: '',    // 1
  //   component: UserComponent   // 2
  // },
  // {
  //   path:'table2',
  //   component: Table2Component,
  //   children:[   // 4
  //     {
  //       path:"index",
  //       component:TableComponent
  //     }
  //   ]
  // }
  
  // {
  //   path:'',
  //   component:ClientLayoutComponent,
  //   children:[
  //     {
  //       path:'',
  //       component:HomepageComponent
  //     },
  //     {
  //       path:'products',
  //       component:ProductsComponent
  //     },
  //     {
  //       path:'products-detail',
  //       component:ProductsDetailComponent
  //     },
  //   ]
  // }

  {
    path: '',
    component: AdminLayoutComponent,
    children:[
      {
        path:'',
        component: ListComponent
      },{
        path: 'create',
        component: CreateComponent
      },
      {
        path:'edit/:id',
        component: UpdateComponent
      }
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
