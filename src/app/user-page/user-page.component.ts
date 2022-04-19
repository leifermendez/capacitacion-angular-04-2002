import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UserInterface } from '../core/interfaces/user.interface';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {

  users:UserInterface[] = []

  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }

  cargarUsuarios():void{
    this.userService.httpUser()
    .subscribe((response) => this.users = response )
  }

}
