import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";

import {IDataForm} from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class DataFormService {

  storageForm = new BehaviorSubject<IDataForm>({
    form: {}

  })

  constructor() {
  }
}
