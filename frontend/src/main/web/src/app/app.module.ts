import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { AgGridModule } from 'ag-grid-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MaterialModule } from './modules/material/material.module'
import {MatCardModule} from '@angular/material/card';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { DateFormat } from './components/utils/date-format/dateFormat'

import { CommunicationService } from './services/communication/communication.service';
import { ProfileComponent } from './components/profile/profile.component';
import { MenuComponent } from './components/menu/menu.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { ListUserComponent } from './components/list-user/list-user.component';
import { UserService } from './services/user/user.service';
import {TokenInterceptor} from './interseptors/tokenInterceptor';
import {AuthService} from './modules/auth/auth.service';
import {AuthGuard} from './modules/auth/auth.guard';
import {AuthModule} from './modules/auth/auth.module';
import {TasksModule} from './modules/tasks/tasks-module';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    // AddTaskComponent,
    // ShowLimitedTasksComponent,
    // PageNavigationComponent,
    DateFormat,
    // DoneMessageRender,
    // DeleteCellRender,
    ProfileComponent,
    MenuComponent,
    AddUserComponent,
    EditUserComponent,
    ListUserComponent
  ],
  imports: [
    AuthModule,
    TasksModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    // AgGridModule.withComponents([DoneMessageRender, DeleteCellRender]),
    BrowserAnimationsModule,
    MaterialModule,
    MatCardModule,
    FlexLayoutModule.withConfig({
      useColumnBasisZero: false,
      printWithBreakpoints: ['md', 'lt-lg', 'lt-xl', 'gt-sm', 'gt-xs']
    }),
  ],
  providers: [CommunicationService, UserService, AuthService, AuthGuard,
    {provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi : true}
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
