import {Sort} from './sort';

export class Pageable {
  sort: Sort;
  pageNumber: number;
  pageSize: number;
  offSet: number;
  unpaged: boolean;
  paged: boolean;

  static readonly DEFAULT_PAGE_SIZE = 5;
  static readonly FIRST_PAGE_NUMBER = 0;

  constructor() {
    this.pageSize = Pageable.DEFAULT_PAGE_SIZE;
    this.pageNumber = Pageable.FIRST_PAGE_NUMBER;
  }
}
