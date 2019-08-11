import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Page } from '../../models/pagination/page';
import { Task } from '../../models/Task';
import {PaginationService} from '../../services/pagination/pagination.service';

@Component({
  selector: 'app-show-limited-tasks',
  templateUrl: './show-limited-tasks.component.html',
  styleUrls: ['./show-limited-tasks.component.css']
})

export class ShowLimitedTasksComponent implements OnInit {
  @Output() pageSizeEvent: EventEmitter<number> = new EventEmitter<number>();

  pageSizes: Array<any> = [
    {id: 5, size: 5, selected: true},
    {id: 10, size: 10, selected: false},
    {id: 25, size: 25, selected: false},
    {id: 50, size: 50, selected: false},
    {id: 100, size: 100, selected: false}
  ];

  constructor(private paginationService: PaginationService) {
  }

  ngOnInit() {
  }

  public changePageSize(size: number): void {
   this.pageSizeEvent.emit(size);
  }

}
