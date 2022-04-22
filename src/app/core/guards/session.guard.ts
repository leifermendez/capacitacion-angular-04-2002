import { tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './../../modules/auth/services/auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionGuard implements CanActivate {

  constructor(
    private cokieService:CookieService,
     private authService:AuthService,
     private httpClient:HttpClient){

  }

  canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkCookie();//TODO El vigilante deja pasar a todo el mundo
  }
  
  private checkCookie():Observable<boolean>{
    try{

      const token = this.cokieService.get('_user_cookie');
      return this.checkToken(token)
   
    }catch(e){
      return of(false)
    }
  }

  private checkToken(token:string):Observable<boolean>{
    //TODO Simulando que hacemos peticion HTTP
    return of(true).pipe(tap(value => {
      if(!value) this.authService.logOut()
    }))
  }

}
