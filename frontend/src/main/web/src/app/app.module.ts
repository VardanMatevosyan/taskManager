import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AgGridModule } from 'ag-grid-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MaterialModule } from './modules/material/material.module'
// import { NoopAnimationsModule } from '@angular/platform-browser/animations'

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
import { DoneMessageRender } from './components/done-message-render/done-message-render.component';
import { DeleteCellRender } from './components/delete-cell-render/delete-cell-render.component';
import { ProfileComponent } from './components/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    TasksComponent,
    SearchComponent,
    AddTaskComponent,
    ShowLimitedTasksComponent,
    PageNavigationComponent,
    DateFormat,
    DoneMessageRender,
    DeleteCellRender,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AgGridModule.withComponents([DoneMessageRender, DeleteCellRender]),
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [CommunicationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
