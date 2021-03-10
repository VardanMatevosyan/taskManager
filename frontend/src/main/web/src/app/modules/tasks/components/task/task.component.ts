import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Task} from 'src/app/models/task';
import {TaskService} from '../../service/task-service';

@Component({
  selector: '[app-task]',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() task: Task;
  @Output() tasksEE: EventEmitter<Task> = new EventEmitter();

  constructor(
    private taskService: TaskService) {
  }

  ngOnInit() {
  }

  onUpdate(task: Task) {
    console.log('task on toggle ' + task);
    const taskToUpdate: Task = task;
    taskToUpdate.done = !task.done;

    this.taskService.updateTask(taskToUpdate).subscribe(
      response => this.handleSuccessfullResponse(response),
    );
  }

  handleSuccessfullResponse(response) {
    this.task.done = response.done;
    console.log('%c TASK update', 'color: green;');
  }

  onDelete(task: Task) {
    this.tasksEE.emit(task);
  }
}
