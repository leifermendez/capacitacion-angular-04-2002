import { tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, finalize, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private _loadingUsers$ = new BehaviorSubject<boolean>(false);
  public loadingUsers$ = this._loadingUsers$.asObservable();
  private _usersState$ = new BehaviorSubject<any>([]);
  public usersState$ = this._usersState$.asObservable();

  constructor(private http:HttpClient) { }


  loadDetailUser(userId:string):Observable<any>{
    this._loadingUsers$.next(true)
    return this.http.get(`http://localhost:3000/v1/courses/${userId}`)
    .pipe(
      tap((response) => this._usersState$.next(response)),
      finalize(() => this._loadingUsers$.next(false))
    )
  }

}
