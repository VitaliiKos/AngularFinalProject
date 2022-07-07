import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";

import { CreateFormRoutingModule } from './create-form-routing.module';
import { CreateFormComponent } from './components/create-form/create-form.component';


@NgModule({
  declarations: [
    CreateFormComponent
  ],
  imports: [
    CommonModule,
    CreateFormRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class CreateFormModule { }
