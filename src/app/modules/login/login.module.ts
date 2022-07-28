import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './components/login/login.component';
// import {MainInterceptor} from "../../main.interceptor.service";


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  // providers: [
  //   {
  //     provide: HTTP_INTERCEPTORS,
  //     multi: true,
  //     useClass: MainInterceptor
  //   }
  // ],
})
export class LoginModule { }
