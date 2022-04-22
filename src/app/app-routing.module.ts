import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SessionGuard } from './core/guards/session.guard';

const routes: Routes = [
  {
    path: 'auth', //TODO localhost:4200/auth -> auth/register auth/login
    loadChildren: () =>
      import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'users', //TODO localhost:4200/users
    loadChildren: () =>
      import('./modules/users/users.module').then((m) => m.UsersModule),
    canActivate:[SessionGuard]//TODO return (true)
  },
  {
    path: 'tasks', //TODO localhost:4200/tasks
    loadChildren: () =>
      import('./modules/tasks/tasks.module').then((m) => m.TasksModule),
  },
  {
      path:'**',
      redirectTo:'/tasks'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
