import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {urls} from "../../../constant";

@Injectable({
  providedIn: 'root'
})
export class UserDetailService {

  constructor(private httpClient:HttpClient) { }

  getUserDetail():Observable<any>{
    return this.httpClient.get<any>(`${urls.users}/detail`)
  }
}
