import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProfileComponent} from './components/profile/profile.component';
import {AddUserComponent} from './components/add-user/add-user.component';
import {ListUserComponent} from './components/list-user/list-user.component';
import {EditUserComponent} from './components/edit-user/edit-user.component';
import {AuthGuard} from './modules/auth/auth.guard';

const routes: Routes = [
  { path: '' , redirectTo: '/tasks', pathMatch: 'full' },
  { path: 'auth', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)},

  { path: 'add-user', canActivate: [AuthGuard], component: AddUserComponent },
  { path: 'list-user', canActivate: [AuthGuard], component: ListUserComponent },
  { path: 'edit-user', canActivate: [AuthGuard], component: EditUserComponent },

  // { path: 'tasks' , canActivate: [AuthGuard], component: TasksComponent },
  { path: 'profile', canActivate: [AuthGuard], component: ProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
