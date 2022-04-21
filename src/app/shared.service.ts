import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, interval } from 'rxjs';
import { UserInterface } from './core/interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private http:HttpClient) {
    interval(1500).subscribe(() => this.llamarHttp())
  }

  private _userSelected$ = new BehaviorSubject<UserInterface>(
    {
      title:'Usuario Actual 🤔',
      userId:1,
      id:1,
      completed:true
    }
  )

  public userSelected$ = this._userSelected$.asObservable();

  private llamarHttp():void{
    this.http.get<UserInterface>('https://jsonplaceholder.typicode.com/todos/1')
    .subscribe((response) => {
      response = {...response, title:`${response.title}-${Math.random()}`}
      console.log({response})
      this._userSelected$.next(response)
    })

  }

  public cambiarUsuario(name:string):void{
    const usuarioNuevo = {
      title:name,
      id:2,
      userId:2,
      completed:false
    }
    this._userSelected$.next(usuarioNuevo)
  }
}
