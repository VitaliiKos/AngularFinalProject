import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {MainLayoutComponent} from "./layouts/main-layout/main-layout.component";
import {BrowserModule} from "@angular/platform-browser";


let routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: 'products', loadChildren: () => import('./modules').then(value => value.ProductsModule)},
      {path: 'home', loadChildren: () => import('./modules').then(value => value.HomeModule)},
      // {path: 'profile', loadChildren: () => import('./modules').then(value => value.ProfileModule)},
      // {path: 'login', loadChildren: () => import('./modules').then(value => value.LoginModule)},
      // {path: 'logout', loadChildren: () => import('./modules').then(value => value.LogoutModule)},
    ]
  }
]
@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
