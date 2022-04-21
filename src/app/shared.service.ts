import { Injectable } from '@angular/core';
import { UserInterface } from './core/interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  public userSelected:UserInterface ={
    title:'Usuario Actual 🤔',
    userId:1,
    id:1,
    completed:true
  };
  constructor() { }
}
