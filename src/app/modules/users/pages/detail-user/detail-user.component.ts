import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.component.html',
  styleUrls: ['./detail-user.component.css']
})
export class DetailUserComponent implements OnInit {
//TODO localhost:4200/users/494949494
  private id:string | null = null;
  loading$ = this.usersService.loadingUsers$;
  usersState$ = this.usersService.usersState$;

  constructor(
    private usersService:UsersService,
    private route:ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.loadDetail();
  }

  loadDetail():void{
    if(this.id){
      this.usersService.loadDetailUser(this.id)
      .subscribe((reponse => {
        console.log(reponse)
      }))
    }
  }
}
