import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '' , redirectTo: '/tasks', pathMatch: 'full' },
  { path: 'auth', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule) },
  { path: 'users', loadChildren: () => import('./modules/users/users-module').then(m => m.UsersModule) },
  { path: 'tasks', loadChildren: () => import('./modules/tasks/tasks-module').then(m => m.TasksModule) },
  { path: 'profile', loadChildren: () => import('./modules/profile/profile-module').then(m => m.ProfileModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
