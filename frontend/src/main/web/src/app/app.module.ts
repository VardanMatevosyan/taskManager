import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { AgGridModule } from 'ag-grid-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MaterialModule } from './modules/material/material.module'

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
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
import { MenuComponent } from './components/menu/menu.component';
import { LoginComponent } from './components/login/login.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { ListUserComponent } from './components/list-user/list-user.component';
import { UserService } from "./services/user/user.service";
import {TokenInterceptor} from "./interseptors/tokenInterceptor";

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
    ProfileComponent,
    MenuComponent,
    LoginComponent,
    AddUserComponent,
    EditUserComponent,
    ListUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AgGridModule.withComponents([DoneMessageRender, DeleteCellRender]),
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule.withConfig({
      useColumnBasisZero: false,
      printWithBreakpoints: ['md', 'lt-lg', 'lt-xl', 'gt-sm', 'gt-xs']
    }),
  ],
  providers: [CommunicationService, UserService, {provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi : true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
