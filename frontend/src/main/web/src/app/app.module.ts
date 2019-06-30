import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskComponent } from './components/task/task.component';
import { HttpClientModule } from '@angular/common/http';
import { TasksComponent } from './components/tasks/tasks.component';
import { SearchComponent } from './components/search/search.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { ShowLimitedTasksComponent } from './components/show-limited-tasks/show-limited-tasks.component';
import { PageNavigationComponent } from './components/page-navigation/page-navigation.component';


@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    TasksComponent,
    SearchComponent,
    AddTaskComponent,
    ShowLimitedTasksComponent,
    PageNavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
