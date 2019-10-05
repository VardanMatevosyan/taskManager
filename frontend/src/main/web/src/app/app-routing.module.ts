import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TasksComponent } from './components/tasks/tasks.component';
import {ProfileComponent} from "./components/profile/profile.component";

const routes: Routes = [
{path: '' , component: TasksComponent},
{path: 'tasks' , component: TasksComponent},
  {path: 'profile', component: ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
