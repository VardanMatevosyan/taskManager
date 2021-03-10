import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {TaskService} from '../../service/task-service';
import { Task } from 'src/app/models/task';



@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  private description: string;
  @Output() addTask: EventEmitter<any> = new EventEmitter();

  constructor(private taskService: TaskService) { }

  ngOnInit() {
  }


  public onClick(): void {
    const task: Task = new Task();
    task.setDescription(this.description);
    task.setDone(false);

    this.addTask.emit(task);

    console.log('%c in onClick Add new TASK', 'color: green;')
    console.table(task);
  }



}
