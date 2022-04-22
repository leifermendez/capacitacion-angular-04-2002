import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailUserComponent } from './pages/detail-user/detail-user.component';
import { ListUserComponent } from './pages/list-user/list-user.component';
//TODO este modulo solo ingresa persona con session osea con un token en la cookie

const routes: Routes = [
  {
    path:'',//TODO localhost/users
    component:ListUserComponent
  },
  {
    path:':id',//TODO localhost/users/:id
    component:DetailUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
