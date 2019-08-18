import {Pageable} from './pageable';
import {Sort} from './sort';

export class Page<T> {
  content: Array<T>;
  first: boolean;
  last: boolean;
  totalPages: number;
  totalElements: number;
  numberOfElements: number;
  size: number;
  number: number;
  empty: boolean;
  sort: Sort;
  pageable: Pageable;

  public constructor() {
    this.pageable = new Pageable();
   }

}
