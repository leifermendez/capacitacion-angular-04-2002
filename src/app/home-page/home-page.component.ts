import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent {
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
