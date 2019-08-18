import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { DatePipe } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { TaskComponent } from './components/task/task.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { SearchComponent } from './components/search/search.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { ShowLimitedTasksComponent } from './components/show-limited-tasks/show-limited-tasks.component';
import { PageNavigationComponent } from './components/page-navigation/page-navigation.component';
import { DateFormat } from './components/utils/date-format/dateFormat'

import { CommunicationService } from './services/communication/communication.service';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    TasksComponent,
    SearchComponent,
    AddTaskComponent,
    ShowLimitedTasksComponent,
    PageNavigationComponent,
    DateFormat
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CommunicationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
