import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import {Page} from '../../models/pagination/page'

@Injectable()
export class CommunicationService {
  private pageIsUpdated: Subject<Page> = new Subject<Page>();
  private elementDoesNotExistsWithParticularPage: Subject<Page> = new Subject<Page>();

  constructor() { }

    public updatedPage(pageIsUpdated: Page): void {
        this.pageIsUpdated.next(pageIsUpdated);
    }

    public waitUpdatedPage(): Observable<Page> {
        return this.pageIsUpdated.asObservable();
    }

    public pageDoesNotExists(currentPage: Page) {
      this.elementDoesNotExistsWithParticularPage.next(currentPage);
    }

    public waitIfPageDoesNotExists(): Observable<Page> {
      return this.elementDoesNotExistsWithParticularPage.asObservable();
    }
}
