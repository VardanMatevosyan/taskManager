import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from '../auth/auth.guard';
import {ListUserComponent} from './components/list-user/list-user.component';
import {AddUserComponent} from './components/add-user/add-user.component';
import {EditUserComponent} from './components/edit-user/edit-user.component';
import {UsersComponent} from './components/users/users.component';


const usersRoutes: Routes = [
  {
    path: '',
    component: UsersComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: ListUserComponent },
      { path: 'add', component: AddUserComponent },
      { path: 'edit', component: EditUserComponent }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(usersRoutes)
  ],
  exports: [RouterModule]
})

export class UsersRouterModule {}
