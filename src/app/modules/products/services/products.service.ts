import {Injectable} from '@angular/core';
import {Observable} from "rxjs";

import {ICategorySelected, IProduct, IUpdateProduct} from "../interfaces";
import {HttpClient} from "@angular/common/http";
import {urls} from "../../../constant";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClient: HttpClient) {
  }

  getALl(category: string | null): Observable<IProduct[]> {
    // console.log(category)
    return this.httpClient.get<IProduct[]>(`${urls.products}?category_id=${category}`)
  }

  getById(id:number):Observable<IProduct>{
    return this.httpClient.get<IProduct>(`${urls.products}/${id}`)
  }

  deleteById(id: number):Observable<void> {
    return this.httpClient.delete<void>(`${urls.products}/${id}`)
  }
  updateById(id: number, productForUpdate: Partial<IUpdateProduct>): Observable<IProduct> {
    return this.httpClient.patch<IProduct>(`${urls.products}/${id}`, productForUpdate)
  }
}
