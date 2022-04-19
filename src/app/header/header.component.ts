import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {

  menu = [
    {
      label:'Home',
      path:['/']
    },
    {
      label:'User',
      path:['/','user']
    },
    {
      label:'Contact',
      path:['/','contact']
    }
  ]

}
