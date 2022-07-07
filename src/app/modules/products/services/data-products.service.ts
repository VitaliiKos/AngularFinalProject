import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

import {IDataProduct} from "../interfaces";


@Injectable({
  providedIn: 'root'
})
export class DataProductsService {

  storageProducts = new BehaviorSubject<IDataProduct>({
    products: []
  })

  constructor() { }
}
