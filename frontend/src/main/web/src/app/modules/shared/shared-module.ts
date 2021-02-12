import {NgModule} from '@angular/core';
import {PageNavigationComponent} from './pagination/components/page-navigation/page-navigation.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from '../material/material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {DateFormat} from './pipes/date-format/dateFormat';

@NgModule({
  declarations: [
    PageNavigationComponent,
    DateFormat
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule,
    FlexLayoutModule.withConfig({
      useColumnBasisZero: false,
      printWithBreakpoints: ['md', 'lt-lg', 'lt-xl', 'gt-sm', 'gt-xs']
    }),
  ],
  exports: [
    PageNavigationComponent,
    DateFormat
  ]
})
export class SharedModule {
}
