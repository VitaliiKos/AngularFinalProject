import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import {catchError, Observable, switchMap, throwError} from 'rxjs';
import {Router} from "@angular/router";

import {LoginService} from "./modules/login/services";
import {IToken} from "./modules/login/interfaces";

@Injectable()
export class MainInterceptor implements HttpInterceptor {
  isRefreshing = false

  constructor(private loginService: LoginService, private router: Router) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const isAuthenticated = this.loginService.isAuthorization();
    console.log(isAuthenticated)

    if (isAuthenticated) {
      request = this.addToken(request, this.loginService.getAccessToken())
    }
    return next.handle(request).pipe(
      catchError((res: HttpErrorResponse) => {
        if (res && res.error && res.status === 401) {
          return this.handler401Error(request, next)
        }

        return throwError(() => new Error('token invalid or expired'))
      })
    ) as any;
  }

  addToken(request: HttpRequest<any>, token: string): HttpRequest<any> {
    return request.clone({
      setHeaders: {Authorization: `Bearer ${token}`}
    })
  };

  handler401Error(request: HttpRequest<any>, next: HttpHandler): any {
    if (!this.isRefreshing) {
      this.isRefreshing = true;
      return this.loginService.refresh().pipe(
        switchMap((tokens: IToken) => {
          return next.handle(this.addToken(request, tokens.access))
        }),
        catchError(() => {
          this.isRefreshing = false
          this.loginService.deleteToken();
          this.router.navigate(['login'])
          return throwError(() => new Error('token invalid or expired'))
        })
      )
    }
  }
}
