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
  private currentNumberOfFirstRow: number;
  private currentNumberOfLastRow: number;
  constructor(private paginationService: PaginationService) { }

  ngOnInit() {
      this.getNumberOfTheFirstElementOfThePage();
      this.getNumberOfTheLastElementOfThePage();
  }

  nextPage() {
    this.nextPageEvent.emit();
    this.getNumberOfTheFirstElementOfThePage();
    this.getNumberOfTheLastElementOfThePage();
  }

  previousPage() {
    this.previousPageEvent.emit();
    this.getNumberOfTheFirstElementOfThePage();
    this.getNumberOfTheFirstElementOfThePage();
    this.getNumberOfTheLastElementOfThePage();
  }

  getCustomPage(pageNumber: number) {
    this.customPageEvent.emit(pageNumber);
    this.getNumberOfTheFirstElementOfThePage();
    this.getNumberOfTheLastElementOfThePage();
  }

  updatePageSize(pageSize: number) {
    this.pageSizeEvent.emit(pageSize);
  }

  getClassForFirstPageLink() {
    let classes = {
      "disabled": this.page.first,
    };
    return classes;
  }

  getClassForLastPageLink() {
    let classes = {
      "disabled": this.page.last
    };
    return classes;
  }

  getActivePage(pageNumber: number) {
    let currentNumber = this.page.pageable.pageNumber + 1;
    return {
      "active" : currentNumber == pageNumber
    };
  }

  getNumberOfTheFirstElementOfThePage() {
    if (this.page.first == undefined || this.page.pageable.pageNumber == 0) {
   console.log("this page is first");
      this.currentNumberOfFirstRow = 1;
    } else if (this.page.pageable.pageNumber < 2) {
      this.currentNumberOfFirstRow = this.page.pageable.pageSize * (this.page.pageable.pageNumber == 0 ? 1 : this.page.pageable.pageNumber) + 1;
    } else {
      this.currentNumberOfFirstRow = this.page.pageable.pageSize * (this.page.pageable.pageNumber == 0 ? 1 : this.page.pageable.pageNumber) + 2;
    }
  }

    getNumberOfTheLastElementOfThePage() {
      if (this.page.first == undefined || this.page.pageable.pageNumber == 0) {
        this.currentNumberOfLastRow = this.page.pageable.pageSize;
      } else if (this.page.pageable.pageSize * (this.page.pageable.pageNumber == 0 ? 1 : this.page.pageable.pageNumber ) == this.page.totalElements) {
        this.currentNumberOfLastRow = this.page.totalElements;
      } else if (this.page.pageable.pageNumber < 2) {
        this.currentNumberOfLastRow = this.currentNumberOfFirstRow + this.page.size;
      } else {
        this.currentNumberOfLastRow = this.currentNumberOfFirstRow - 1 + this.page.size;
        }
    }
}
