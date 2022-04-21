import { UserInterface } from './../core/interfaces/user.interface';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {

  constructor(private sharedService:SharedService){

  }

  userActualEnHomePage = this.sharedService.userSelected$

  ngOnInit(): void {
      // this.sharedService.userSelected$.subscribe((user) => {
      //   this.userActualEnHomePage = user
      // })
  }

  buttonCambiarUsuario():void{
    this.sharedService.cambiarUsuario('Roberto 🤔')
  }

  //TODO Retorna un Observable y debemos suscribirnos

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
