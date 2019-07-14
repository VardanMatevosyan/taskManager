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

  public getTasks(): Array<Task> {
    return this.tasks;
  }

    public addTask(task: Task) {
    this.httpClientService.saveTask(task).subscribe(
      response => this.tasks.push(task),
    );

    console.log('%c Add new TASK', "color: green;")
    console.table(task);
  }

  public deleteTask(task: Task) {
    deleted: boolean = false;
    this.httpClientService.deleteTask(task.id).subscribe(
      deleted = true;
    );

    if (deleted) {
      this.tasks = this.task.filter(t => t.id !== task.id);
    }
  }

}
