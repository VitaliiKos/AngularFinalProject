import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ProductsComponent} from './components/products/products.component';
import {CreateFormComponent} from "../create-form/components/create-form/create-form.component";
import {ProductDetailComponent} from "./components/product-detail/product-detail.component";

const routes: Routes = [
  {
    path: '', component: ProductsComponent,
    children: [
      {path: 'category/:id', component: ProductsComponent},
    ]
  },
  {path: 'post-new-add', component: CreateFormComponent},
  {path: 'update-item', component: CreateFormComponent},
  {path: 'product-detail/:id', component: ProductDetailComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule {
}
