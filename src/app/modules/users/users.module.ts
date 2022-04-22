import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { ListUserComponent } from './pages/list-user/list-user.component';
import { DetailUserComponent } from './pages/detail-user/detail-user.component';


@NgModule({
  declarations: [
    ListUserComponent,
    DetailUserComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
