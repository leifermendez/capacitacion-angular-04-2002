import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.component.html',
  styleUrls: ['./detail-user.component.css'],
})
export class DetailUserComponent implements OnInit {
  userForm = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(3)]),
    completed: new FormControl(true),
    id: new FormControl(1),
    userId: new FormControl(1),
  });
  @Input() listaUsuarios:[number, string] = [1, 'leifer']
  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  addUser():void{
    const userNew = this.userForm.value;
    this.userService.create(userNew)
  }
}
