import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';
import {MatCardModule} from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { CommunicationService } from './services/communication/communication.service';
import {TokenInterceptor} from './interseptors/tokenInterceptor';
import {AuthService} from './modules/auth/auth.service';
import {AuthGuard} from './modules/auth/auth.guard';
import {AuthModule} from './modules/auth/auth.module';
import {TasksModule} from './modules/tasks/tasks-module';
import {UsersModule} from './modules/users/users-module';
import {SharedModule} from './modules/shared/shared-module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AuthModule,
    TasksModule,
    UsersModule,
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatCardModule,
    FlexLayoutModule.withConfig({
      useColumnBasisZero: false,
      printWithBreakpoints: ['md', 'lt-lg', 'lt-xl', 'gt-sm', 'gt-xs']
    }),
  ],
  providers: [CommunicationService, AuthService, AuthGuard,
    {provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi : true}
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
