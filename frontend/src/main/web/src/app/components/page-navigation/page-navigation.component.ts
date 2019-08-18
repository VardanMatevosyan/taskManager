import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Page } from '../../models/pagination/page';
import { Pageable } from '../../models/pagination/pageable';
import { Task } from '../../models/Task';
import {PaginationService} from '../../services/pagination/pagination.service';
import { CommunicationService } from '../../services/communication/communication.service';

@Component({
  selector: '[app-page-navigation]',
  templateUrl: './page-navigation.component.html',
  styleUrls: ['./page-navigation.component.css']
})

export class PageNavigationComponent implements OnInit {
  private communicationService: CommunicationService;
  @Input() page: Page<Task>;
  @Input() maxNumber: number = 0;
  @Output() nextPageEvent = new EventEmitter();
  @Output() previousPageEvent = new EventEmitter();
  //@Output() pageSizeEvent: EventEmitter<number> = new EventEmitter<number>();
  @Output() customPageEvent: EventEmitter<number> = new EventEmitter<number>();
  private currentNumberOfFirstRow: number;
  private currentNumberOfLastRow: number;
  private isUpdatedPage: boolean = false;

  constructor(private paginationService: PaginationService, private _communicationService: CommunicationService) {
    this.communicationService = _communicationService;
    this.communicationService.waitUpdatedPage().subscribe((result) => {
    this.page = result;

     if ((this.page.numberOfElements == 0) && (this.page.pageable.pageSize > Pageable.DEFAULT_PAGE_SIZE) && this.page != undefined) {
      this.page.number = 0;
      this.page.pageable.pageNumber = 0;
      this.communicationService.pageDoesNotExists(this.page);
     }
    this.getNumberOfTheFirstElementOfThePage();
    this.getNumberOfTheLastElementOfThePage();
    });
  }

  ngOnInit() {
      //this.getNumberOfTheFirstElementOfThePage();
      //this.getNumberOfTheLastElementOfThePage();
  }

  nextPage() {
    this.nextPageEvent.emit();

  }

  previousPage() {
    this.previousPageEvent.emit();

  }

  getCustomPage(pageNumber: number) {
    this.customPageEvent.emit(pageNumber);

  }

 // updatePageSize(pageSize: number) {
   // this.pageSizeEvent.emit(pageSize);
  //}

  getClassForFirstPageLink() {
    let classes = {
      "disabled": this.page != undefined ? this.page.first : false,
    };
    return classes;
  }

  getClassForLastPageLink() {
    let classes = {
      "disabled": this.page != undefined ? this.page.last : false
    };
    return classes;
  }

  getActivePage(pageNumber: number) {
    let currentNumber = this.page != undefined ? this.page.pageable.pageNumber + 1 : 0;
    return {
      "active" : currentNumber == pageNumber
    };
  }

  public getNumberOfTheFirstElementOfThePage() {
      let currentFirst: number;
      let pageSize: number = this.page.pageable.pageSize;
      let pageNumber: number = this.page.pageable.pageNumber;
      let totalElements: number = this.page.totalElements;

     if (this.page.first == undefined || pageNumber == 0) {
        currentFirst = 1;
      } else if (pageNumber < 2) {
        currentFirst = pageSize * (pageNumber == 0 ? 1 : pageNumber) + 1;
      } else {
        currentFirst = pageSize * (pageNumber == 0 ? 1 : pageNumber) + 1;
      }
      this.currentNumberOfFirstRow = currentFirst;
  }

    getNumberOfTheLastElementOfThePage() {
    //console.log("this.page.pageable.pageSize is "+ this.page.pageable.pageSize);
    //console.log("this.page.size is " + this.page.size);

    let currentFirst: number = this.currentNumberOfFirstRow;
    let pageSize: number = this.page.pageable.pageSize;
    let pageNumber: number = this.page.pageable.pageNumber;
    let totalElements: number = this.page.totalElements;
    let numbOfElements: number = this.page.numberOfElements;
    console.log("numb " + this.page.numberOfElements);
    let current: number;
      if (numbOfElements < pageSize) {
        this.currentNumberOfLastRow = parseInt(totalElements);
        return;
      }
      if (this.page.first == undefined || pageNumber == 0) {
        current = pageSize;
        console.log("if is " + current + " - " + pageSize);
      } else if (pageSize * (pageNumber == 0 ? 1 : pageNumber ) == totalElements) {
        current = totalElements;
        console.log("ELSE total is " + current);
      } else if (pageNumber < 2) {
        current = parseInt(currentFirst) + parseInt(pageSize) - 1;
        console.log("ELSE if < 2 is " + current + " - " + currentFirst + " - " + pageSize);
      } else {
        current = currentFirst - 1 + pageSize;
        console.log("ELSE is " + current);
        }
        this.currentNumberOfLastRow = current;
    }


}
