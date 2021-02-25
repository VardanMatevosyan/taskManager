import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {AuthComponent} from './components/auth/auth.component';
import {MaterialModule} from '../material/material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {Oauth2RedirectHandlerComponent} from './components/oauth2-redirect-handler/oauth2-redirect-handler.component';
import {AuthService} from './auth.service';

@NgModule({
  declarations: [
    AuthComponent,
    Oauth2RedirectHandlerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule.withConfig({
      useColumnBasisZero: false,
      printWithBreakpoints: ['md', 'lt-lg', 'lt-xl', 'gt-sm', 'gt-xs']
    }),
    RouterModule.forChild([
      { path: 'auth', component: AuthComponent },
      { path: 'oauth2/redirect', component: Oauth2RedirectHandlerComponent }
    ])
  ],
  providers: [AuthService]
})
export class AuthModule {
}
