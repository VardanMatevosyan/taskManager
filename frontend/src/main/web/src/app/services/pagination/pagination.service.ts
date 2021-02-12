import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Task } from '../../models/task';
import { Page } from '../../models/pagination/page';
import { Pageable } from '../../models/pagination/pageable';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
// const API_URL = environment.apiUrl;
const API_URL = '//localhost:8080';
@Injectable({
  providedIn: 'root'
})
export class PaginationService {

 private tasksUrl = API_URL + '/tasks';

  constructor(private http: HttpClient) { }

  public getCustomPage(page: Page<Task>, pageNumber: number): Pageable {
    page.pageable.pageNumber = pageNumber - 1;
    return page.pageable;
  }

  public getNextPage(page: Page<Task>): Pageable {
    if (!page.last) {
      page.pageable.pageNumber = page.pageable.pageNumber + 1;
    }
    return page.pageable;
  }

  public getPreviousPage(page: Page<Task>): Pageable {
    if (!page.first) {
      page.pageable.pageNumber = page.pageable.pageNumber - 1;
    }
    return page.pageable;
  }

  public getPageInNewSize(page: Page<any>, pageSize: number): Pageable {
    page.pageable.pageSize = pageSize;
    page.pageable.pageNumber = Pageable.FIRST_PAGE_NUMBER;
    return page.pageable;
  }

  public getPage(pageable: Pageable): Observable<Page<Task>> {
      let url = this.tasksUrl
      + '?page=' + pageable.pageNumber
      + '&size=' + pageable.pageSize
      + '&sort=description';
      return this.http.get<Page<Task>>(url, httpOptions);
    }

}
