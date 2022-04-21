import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { filter, tap, map } from 'rxjs/operators'
import { environment } from 'src/environments/environment';
import { UserInterface } from './core/interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  //TODO aqui se almacena los datos mas recientes
  private _stateUsers$ = new BehaviorSubject<UserInterface[]>([]);
  public stateUsers$ = this._stateUsers$.asObservable();

  constructor(private http: HttpClient) {}

  //TODO READ LEER
  httpUser(): void {
    this.http
      .get<UserInterface[]>(`${environment.url}/todos`)
      .pipe(
        tap((miMuestra) => console.log(miMuestra)),
        map((data) => data.filter((user) => user.completed)),
        map((data) => data.map((user) => {
          return {...user, title:user.title.toUpperCase()}
        }))
      )
      .subscribe((users) => {
        //TODO recibimos datos del backend
        const stateCurrent: UserInterface[] = this._stateUsers$.getValue();
        const stateNew = [...stateCurrent, ...users];
        this._stateUsers$.next(stateNew);
      });
  }

  create(user: UserInterface): void {
    const stateCurrent: UserInterface[] = this._stateUsers$.getValue();
    const stateNew = [user, ...stateCurrent];
    this._stateUsers$.next(stateNew);
  }
}
