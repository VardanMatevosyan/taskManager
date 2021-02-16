import {NgModule} from '@angular/core';
import {ProfileComponent} from './components/profile/profile.component';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from '../auth/auth.guard';
import {MaterialModule} from '../material/material.module';

const profileRoute: Routes = [
  { path: '', canActivate: [AuthGuard], component: ProfileComponent }
  ];

@NgModule({
  declarations: [ProfileComponent],
  imports: [
    MaterialModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild(profileRoute)
  ]
})
export class ProfileModule {
}
