import { CookieService } from 'ngx-cookie-service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private cokieService:CookieService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.cokieService.get('_user_cookie');
    if(token){
      request = request.clone({
        setHeaders: {
          Authorization:`Bearer ${token}`
        }
      })
    }
    console.log('Ver que esta pasando?',request)
    
    return next.handle(request);
  }
}
