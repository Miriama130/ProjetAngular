import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NgModel } from '@angular/forms';
import { TestComponent } from '../app/test/test.component';
import { NotFoundComponent } from '../app/not-found/not-found.component';
import { ProductCategoryComponent } from '../app/product-category/product-category.component';
import { ProductsCategoryQPComponent } from '../app/products-category-qp/products-category-qp.component';
import {DetailsCategoryComponentComponent} from '../app/details-category-component/details-category-component.component'
const routes: Routes = [
  {path : "home", component : HomeComponent},
  {path:"",redirectTo:"home", pathMatch:"full"},
  {path:"product", loadChildren: () => import('product/product.module').then(m => m.ProductModule)},
  {path:"products", component:ProductsCategoryQPComponent},
  {path:"home", component:HomeComponent, children:[
    {path:"category/:id", component:DetailsCategoryComponentComponent}
]}
  {path:"test,component:TestComponent"},
   {path:"**", component :NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
