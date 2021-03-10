import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TaskComponent} from './components/task/task.component';
import {TasksComponent} from './components/tasks/tasks.component';
import {AgGridModule} from 'ag-grid-angular';
import {DoneMessageRenderComponent} from './components/done-message-render/done-message-render.component';
import {DeleteCellRender} from './components/delete-cell-render/delete-cell-render.component';
import {SharedModule} from '../shared/shared-module';
import {AddTaskComponent} from './components/add-task/add-task.component';
import {ShowLimitedTasksComponent} from './components/show-limited-tasks/show-limited-tasks.component';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {AuthGuard} from '../auth/auth.guard';
import {TaskService} from './service/task-service';

@NgModule({
  declarations: [
    TaskComponent,
    TasksComponent,
    AddTaskComponent,
    ShowLimitedTasksComponent,
    DeleteCellRender,
    DoneMessageRenderComponent
  ],
  imports: [
    SharedModule,
    FormsModule,
    CommonModule,
    AgGridModule.withComponents([DoneMessageRenderComponent, DeleteCellRender]),
    RouterModule.forChild([
      { path: '', canActivate: [AuthGuard], component: TasksComponent },
      { path: 'tasks', canActivate: [AuthGuard], component: TasksComponent }
    ])
  ],
  providers: [TaskService]
})
export class TasksModule {}
