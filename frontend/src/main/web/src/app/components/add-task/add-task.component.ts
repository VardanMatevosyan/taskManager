import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClientService } from '../../service/http-client.service';
import {Task} from '../../models/Task';
import { TasksComponent } from '../tasks/TasksComponent'


@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  private task: Array<Task> = new TasksComponent().getTasks():
  let description: string;
  @Output() addTask: EventEmitter<any> = new EventEmitter();

  constructor(private httpClientService: HttpClientService) { }

  ngOnInit() {
  }

  public saveTask(): void {
    let task: Task = new Task();
    task.setDescription(this.description);
    task.setDone(false);
    task.setCreateDate();

    this.addTask.emit(task);

    this.httpClientService.saveTask(task).subscribe(
      response => this.handleSuccessfullResponse(response),
    );
  }

    private handleSuccessfullResponse(task: Task): void {
    this.tasks.push(task);
    console.log('%c Add new TASK', "color: green;")
    console.table(response);
    }



}
