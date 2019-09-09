import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import {Page} from '../../models/pagination/page'
import {Task} from '../../models/Task'

@Injectable()
export class CommunicationService {
  private pageIsUpdated: Subject<Page<Task>> = new Subject<Page<Task>>();
  private elementDoesNotExistsWithParticularPage: Subject<Page<Task>> = new Subject<Page<Task>>();

  constructor() { }

    public updatedPage(pageIsUpdated: Page<Task>): void {
        this.pageIsUpdated.next(pageIsUpdated);
    }

    public waitUpdatedPage(): Observable<Page<Task>> {
        return this.pageIsUpdated.asObservable();
    }

    public pageDoesNotExists(currentPage: Page<Task>) {
      this.elementDoesNotExistsWithParticularPage.next(currentPage);
    }

    public waitIfPageDoesNotExists(): Observable<Page<Task>> {
      return this.elementDoesNotExistsWithParticularPage.asObservable();
    }
}
