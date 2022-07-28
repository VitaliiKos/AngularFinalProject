import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, tap} from "rxjs";

import {IToken, IUser} from "../interfaces";
import {urls} from "../../../constant";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private accessTokenKey = 'access';
  private refreshTokenKey = 'refresh';
  private sessionId = 'status';

  constructor(private httpClient: HttpClient) {
  }
  setSessionId(status: boolean): void {
    // console.log(localStorage.getItem(this.sessionId))
    localStorage.setItem(this.sessionId, `${status}`)
    // console.log(localStorage.getItem(this.sessionId))
  }

  login(user: IUser): Observable<IToken> {
    return this.httpClient.post<IToken>(urls.auth, user)
  };

  setToken(token: IToken): void {
    // console.log(token)
    localStorage.setItem(this.accessTokenKey, token.access)
    localStorage.setItem(this.refreshTokenKey, token.refresh)
  };

  isAuthorization(): boolean {
    // console.log(!!localStorage.getItem(this.accessTokenKey))
    return !!localStorage.getItem(this.accessTokenKey)
  };

  getAccessToken(): string {
    return localStorage.getItem(this.accessTokenKey) as string
  };

  getRefreshToken(): string {
    return localStorage.getItem(this.refreshTokenKey) as string
  };


  deleteToken(): void {
    localStorage.removeItem(this.accessTokenKey)
    localStorage.removeItem(this.refreshTokenKey)
    localStorage.removeItem(this.sessionId)

  };

  refresh(): Observable<IToken> {
    const refresh = this.getRefreshToken()
    return this.httpClient.post<IToken>(`${urls.auth}/refresh`, {refresh}).pipe(
      tap((tokens: IToken) => {
        this.setToken(tokens)
      })
    )
  }

}
