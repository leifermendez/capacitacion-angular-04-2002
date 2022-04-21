import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UserInterface } from '../core/interfaces/user.interface';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {
  variable:[number, string] = [1, 'num']
  users:UserInterface[] = []
  datoABuscar!:string;
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.cargarUsuarios();
    this.userService.stateUsers$.subscribe((response) => this.users = response)
  }
  

  cargarUsuarios():void{
    this.userService.httpUser()
  }

}
