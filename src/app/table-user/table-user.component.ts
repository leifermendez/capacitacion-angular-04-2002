import { Component, OnInit } from '@angular/core';
import { UserInterface } from '../core/interfaces/user.interface';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-table-user',
  templateUrl: './table-user.component.html',
  styleUrls: ['./table-user.component.css']
})
export class TableUserComponent implements OnInit {
  users:UserInterface[] =[
    {
      userId:1,
      title:'Jesus',
      id:2,
      completed:false
    },
    {
      userId:2,
      title:'Maria',
      id:3,
      completed:false
    },
    {
      userId:3,
      title:'Juan',
      id:4,
      completed:false
    }
  ]


  constructor(private sharedService:SharedService) { }

  ngOnInit(): void {
  }

}
