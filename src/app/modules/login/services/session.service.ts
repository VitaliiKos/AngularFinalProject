import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

import {ISession} from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  storage = new BehaviorSubject<ISession>({
    status: false
  });

  constructor() { }
}
