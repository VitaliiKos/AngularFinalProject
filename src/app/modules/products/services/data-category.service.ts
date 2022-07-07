import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

import {IDataCategory} from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class DataCategoryService {
  storageCategories = new BehaviorSubject<IDataCategory>({
    categories: []
  })

  constructor() { }
}
