import { tap } from 'rxjs/operators';
import { Observable, of, BehaviorSubject, finalize, delay } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _authLoading$ = new BehaviorSubject<boolean>(false);
  public authLoading$ = this._authLoading$.asObservable();

  constructor(
    private http: HttpClient,
    private cokieService: CookieService,
    private router: Router
  ) {}

  //TODO Funcion de http
  sendCredentials(email: string, password: string): Observable<any> {
    this._authLoading$.next(true); //TODO Mostrar loading de carga...
    //TODO Es donde tu haces la peticion con el backend HTTP
    const user = {
      token: 'jwt-token-123456789',
      user: {
        name: 'Leifer',
        email: 'leifer@test.com',
        id: 1,
        avatar: '',
      },
    };

    return this.http
      .post<{data:{access_token:string, user:any}}>('http://localhost:3000/v1/auth/login', { email, password })
      .pipe(
        delay(1500),
        tap(({data}) => {
          this.cokieService.set('_user_cookie', data.access_token, 4, '/');
        }),
        finalize(() => this._authLoading$.next(false))
      );

    // return of(user).pipe(
    //   delay(1500),
    //   tap((response) => {
    //     this.cokieService.set('_user_cookie', response.token, 4, '/')
    //   }),
    //   finalize(() => this._authLoading$.next(false))
    // )
  }

  logOut(): void {
    this.cokieService.delete('_user_cookie', '/');
    this.router.navigate(['/', 'auth', 'login']);
  }
}
