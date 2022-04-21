import { UserService } from './../user.service';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit, OnDestroy {

  constructor(private userService:UserService) { }

  ngOnDestroy(): void {

  }

  ngOnInit(): void {
    this.cargarUser();
  }
  

  cargarUser():void{

  }
}
