import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {
  @Input() username!:string;

  menu = [
    {
      label:'Home',
      path:['/'],
      icon:'uil uil-home'
    },
    {
      label:'User',
      path:['/','user'],
      icon:'uil uil-user'
    },
    {
      label:'Contact',
      path:['/','contact'],
      icon:'uil uil-envelope'
    },
    {
      label:'Login',
      path:['/','login'],
      icon:'uil uil-user'
    }
  ]

}
