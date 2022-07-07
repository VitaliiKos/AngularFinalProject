import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {ICategorySelected} from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class SelectedCategoryService {

  constructor() {
  }

  storageSelectedCategory = new BehaviorSubject<ICategorySelected>({
    selectedCategory: ''
  })
}
