import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {IUpdateProduct} from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class UpdateProductService {
  storageUpdateProduct = new BehaviorSubject<IUpdateProduct>({
    id: 0,
    image: null,
    name: '',
    price: '',
    stock: 0,
    description: '',
    category: ''
  })

  constructor() { }
}
