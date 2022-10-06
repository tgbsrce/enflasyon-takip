import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let newReq = req;

    if (!newReq.url.includes('statbureau')) {
      const httpHeaders = { authorization: this.authService.token || '' };
      newReq = req.clone({ setHeaders: httpHeaders });
    }

    return next.handle(newReq);
  }
}
