import { Component } from '@angular/core';
import {ICellRendererAngularComp} from 'ag-grid-angular';
import {ICellRendererParams} from 'ag-grid-community';
import {TaskService} from '../../service/task-service';
import {Task} from '../../../../models/Task';

@Component({
  selector: 'app-done-message-render',
  templateUrl: './done-message-render.component.html',
  styleUrls: ['./done-message-render.component.css']
})
export class DoneMessageRenderComponent implements ICellRendererAngularComp {
  public params: ICellRendererParams;

  constructor(private taskService: TaskService) { }

  refresh(params: any): boolean {
    return false;
  }

  agInit(params: ICellRendererParams): void {
    this.params = params;
  }

  onUpdate() {
    const task: Task = this.params.data;
    task.done = !task.done;

    this.taskService.updateTask(task).subscribe(
      successResponse => {
        if (successResponse) {
          console.log(
            'updated task done with id - ' + task.id
            + ' and description ' + task.description
            + ' to - ' + task.done);
        }
      },
      errorResponse => {
        this.params.data.done = !this.params.data.done;
        if (errorResponse.error.status === 403) {
          alert('Access is ' + errorResponse.error.message + '. Need update to ADMIN role ');
        } else {
          alert(errorResponse.error.message);
        }
      });
  }
}
