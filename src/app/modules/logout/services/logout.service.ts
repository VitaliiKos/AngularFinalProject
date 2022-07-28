import { Injectable } from '@angular/core';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class LogoutService {
  private accessTokenKey = 'access';
  private refreshTokenKey = 'refresh';
  private sessionId = 'status';

  constructor(private router:Router) { }

  logout():void {
    localStorage.removeItem(this.accessTokenKey)
    // localStorage.removeItem(this.refreshTokenKey)
    localStorage.removeItem(this.sessionId)
    this.router.navigate(['login'])
  }

}
