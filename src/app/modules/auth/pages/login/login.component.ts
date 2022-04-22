import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loading$ = this.authService.authLoading$;
  user: any;
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  sendCredentials(): void {
    this.authService
      .sendCredentials('leifer33@gmail.com', 'TOken.01')
      .subscribe((response) => {
        this.user = response;
        //TODO datos del usuario que se logeo!
      });
  }
}
