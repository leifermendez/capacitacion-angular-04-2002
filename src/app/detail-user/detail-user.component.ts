import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.component.html',
  styleUrls: ['./detail-user.component.css']
})
export class DetailUserComponent implements OnInit {

  userActualEnDetail = this.sharedService.userSelected;

  constructor(private sharedService:SharedService) { }

  ngOnInit(): void {
  }

}
