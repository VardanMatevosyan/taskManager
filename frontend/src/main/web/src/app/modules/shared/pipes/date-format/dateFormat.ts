import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
    name: 'dateFormatPipe',
})

export class DateFormat implements PipeTransform  {
  transform(value: string) {
     const datePipe = new DatePipe("en-US");
     value = datePipe.transform(value, 'y-MMM-d hh:mm a');
     return value;
   }
}
