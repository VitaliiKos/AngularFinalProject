import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";

import { LogoutRoutingModule } from './logout-routing.module';
import { LogoutComponent } from './components/logout/logout.component';
import {MainInterceptor} from "../../main.interceptor";


@NgModule({
  declarations: [
    LogoutComponent
  ],
  imports: [
    CommonModule,
    LogoutRoutingModule,
    HttpClientModule
  ],
  providers: [
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   multi: true,
    //   useClass: MainInterceptor
    // }
  ],
})
export class LogoutModule { }
