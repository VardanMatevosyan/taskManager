import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared-module';
import {UsersRouterModule} from './users-router-module';
import {AddUserComponent} from './components/add-user/add-user.component';
import {ListUserComponent} from './components/list-user/list-user.component';
import {EditUserComponent} from './components/edit-user/edit-user.component';
import {UserService} from './services/user.service';
import {RouterModule} from '@angular/router';
import {UsersComponent} from './components/users/users.component';

@NgModule({
  declarations: [
    AddUserComponent,
    EditUserComponent,
    ListUserComponent,
    UsersComponent
  ],
  providers: [UserService],
  exports: [
    AddUserComponent,
    EditUserComponent,
    ListUserComponent,
    UsersComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    UsersRouterModule
  ]
})
export class UsersModule {}
