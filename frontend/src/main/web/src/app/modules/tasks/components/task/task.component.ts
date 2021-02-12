import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/models/task';
import {HttpClientService} from '../../../../service/http-client.service';

@Component({
  selector: '[app-task]',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
	@Input() task: Task;
	@Output() tasksEE: EventEmitter<Task> = new EventEmitter();

  constructor(
    private httpClientService: HttpClientService) { }

  ngOnInit() {
  }

    setClasses() {
    const classes = {
    'line_through_when_completed' : this.task.done,
    'text-align' : 'justify'
    };
    return classes;
  }

  onToggle(task: Task) {
 	const taskToUpdate: Task = task;
 	taskToUpdate.done = !task.done;

  	this.httpClientService.updateTask(taskToUpdate).subscribe(
  		response => this.handleSuccessfullResponse(response),
  	);
  }

  handleSuccessfullResponse(response) {
  this.task.done = response.done;
  console.log('%c TASK update', 'color: green;')
  console.table(this.task);
  }

  onDelete(task: Task) {
  this.tasksEE.emit(task);

  }
}
