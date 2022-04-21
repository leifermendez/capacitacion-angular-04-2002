import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent {

  constructor(private sharedService:SharedService){

  }

  userActualEnHomePage = this.sharedService.userSelected;

  username: string | null = null;
  isValid = false;

  usuarioActual = {
    name:'Leifer',
    email:'test@test.com'
  }

  login(): void {
    this.username = 'Jesus';
    this.isValid = true
  }


}
