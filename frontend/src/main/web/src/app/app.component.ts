import { Component, OnInit } from '@angular/core';
import { PaginationService } from './services/pagination/pagination.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'task-manager';
  constructor() { }
  ngOnInit() {}

}
