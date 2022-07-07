import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http";

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './components/products/products.component';
import { ProductComponent } from './components/product/product.component';
import { CategoryComponent } from './components/categories/category.component';
import {CategoryService, ProductsService} from "./services";
import {RouterModule} from "@angular/router";
import { ProductDetailComponent } from './components/product-detail/product-detail.component';


@NgModule({
  declarations: [
    ProductsComponent,
    ProductComponent,
    CategoryComponent,
    ProductDetailComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [
    ProductsService,
    CategoryService
  ]
})
export class ProductsModule { }
