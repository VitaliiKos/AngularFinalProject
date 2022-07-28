import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";

import {ProductsRoutingModule} from './products-routing.module';
import {ProductsComponent} from './components/products/products.component';
import {ProductComponent} from './components/product/product.component';
import {CategoryComponent} from './components/categories/category.component';
import {CategoryService, ProductsService} from "./services";
import {ProductDetailComponent} from './components/product-detail/product-detail.component';
import {MainInterceptor} from "../../main.interceptor";


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
    CategoryService,
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: MainInterceptor
    }
  ]
})
export class ProductsModule {
}
