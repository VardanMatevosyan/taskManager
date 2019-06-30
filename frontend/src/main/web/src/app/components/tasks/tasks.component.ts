import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../../service/http-client.service';
import {Task} from '../../models/Task'

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})

export class TasksComponent implements OnInit {
	tasks:  Array<Task>;

  constructor(
	private httpClientService: HttpClientService
  ) { }

  ngOnInit() {
  this.httpClientService.getTasks().subscribe(
  response => this.handleSuccessfullResponse(response),
  );
  }

  handleSuccessfullResponse(response) {
  this.tasks = response;
  console.log('%c TASKS', "color: green;")
  console.table(this.tasks);
  }

}
