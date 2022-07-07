import { Injectable } from '@angular/core';
import {ICategory, ICategorySelected, IProduct} from "../interfaces";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {urls} from "../../../constant";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient:HttpClient) { }

  getAll():Observable<ICategory[]>{
    return this.httpClient.get<ICategory[]>(`${urls.categories}`)
  }
  create(product: any): Observable<IProduct> {
    // console.log(product['category'])
    return this.httpClient.post<IProduct>(`${urls.createProduct}/${product['category']}/add_product`, product)
  }
}
