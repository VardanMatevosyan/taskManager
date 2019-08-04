import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {
  private allFieldsCriteria: string = "";
  @Output() allFieldsCriteriaEvent: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  public onSearch() {
    this.allFieldsCriteriaEvent.emit(this.allFieldsCriteria);
  }

}
