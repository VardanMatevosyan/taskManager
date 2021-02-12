import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TaskComponent} from './components/task/task.component';
import {TasksComponent} from './components/tasks/tasks.component';
import {AgGridModule} from 'ag-grid-angular';
import {DoneMessageRender} from './components/done-message-render/done-message-render.component';
import {DeleteCellRender} from './components/delete-cell-render/delete-cell-render.component';
import {SharedModule} from '../shared/shared-module';
import {AddTaskComponent} from './components/add-task/add-task.component';
import {ShowLimitedTasksComponent} from './components/show-limited-tasks/show-limited-tasks.component';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    TaskComponent,
    TasksComponent,
    AddTaskComponent,
    ShowLimitedTasksComponent,
    DeleteCellRender,
    DoneMessageRender
  ],
  imports: [
    SharedModule,
    FormsModule,
    CommonModule,
    AgGridModule.withComponents([DoneMessageRender, DeleteCellRender]),
    RouterModule.forChild([
      { path: '', component: TasksComponent },
      { path: 'tasks', component: TasksComponent }
    ])
  ]
})
export class TasksModule {}
