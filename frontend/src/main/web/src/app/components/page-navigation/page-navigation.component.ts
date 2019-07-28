import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Page } from '../../models/pagination/page';
import { Task } from '../../models/Task';
import {PaginationService} from '../../services/pagination/pagination.service';

@Component({
  selector: '[app-page-navigation]',
  templateUrl: './page-navigation.component.html',
  styleUrls: ['./page-navigation.component.css']
})

export class PageNavigationComponent implements OnInit {
  @Input() page: Page<Task>;
  @Input() maxNumber: number = 0;
  @Output() nextPageEvent = new EventEmitter();
  @Output() previousPageEvent = new EventEmitter();
  @Output() pageSizeEvent: EventEmitter<number> = new EventEmitter<number>();
  @Output() customPageEvent: EventEmitter<number> = new EventEmitter<number>();
  private isPrevActive: boolean = false;
  private isNextActive: boolean = false;
  constructor(private paginationService: PaginationService) { }

  ngOnInit() {
  }

  nextPage() {
    this.nextPageEvent.emit();
    this.isNextActive = true;
    this.isPrevActive = false;
  }

  previousPage() {
    this.previousPageEvent.emit();
    this.isPrevActive = true;
    this.isNextActive = false;
  }

  getCustomPage(pageNumber: number) {
    this.customPageEvent.emit(pageNumber);
  }

  updatePageSize(pageSize: number) {
    this.pageSizeEvent.emit(pageSize);
  }

  getClassForFirstPageLink() {
    if (this.page.pageable.pageNumber + 1 > this.maxNumber && this.isPrevActive) {
          this.isPrevActive = true;
     } else {
      this.isPrevActive = false;
     }
    let classes = {
      "disabled": this.page.first,
      "active": this.isPrevActive
    };
    return classes;
  }

  getClassForLastPageLink() {
    if (this.page.pageable.pageNumber + 1 > this.maxNumber && this.isNextActive) {
      this.isNextActive = true;
    } else {
      this.isNextActive = false;
    }
    let classes = {
      "disabled": this.page.last,
      "active": this.isNextActive
    };
    return classes;
  }

  getActivePage(pageNumber: number) {
    let currentNumber = this.page.pageable.pageNumber + 1;
    return {
      "active" : currentNumber == pageNumber
    };
  }
}
