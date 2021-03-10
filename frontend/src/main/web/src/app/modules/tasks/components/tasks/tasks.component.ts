import {Component, OnInit} from '@angular/core';
import {DoneMessageRenderComponent} from '../done-message-render/done-message-render.component';
import {DeleteCellRender} from '../delete-cell-render/delete-cell-render.component';
import * as moment from 'moment';

import {Page} from '../../../../models/pagination/page';
import {PaginationService} from '../../../../services/pagination/pagination.service';
import {CommunicationService} from '../../../../services/communication/communication.service';
import {TaskService} from '../../service/task-service';
import { Task } from '../../../../models/task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})

export class TasksComponent implements OnInit {
  private tasks: Array<Task>;
  private filteredTasks: Array<Task>;
  private page: Page<Task> = new Page();
  private colmDef;
  private gridColumnsApi;
  private gridApis;
  private defaultColDef;
  private rowData: Array<Task>;
  private context;
  private frameworkComponents;


  constructor(
    private taskService: TaskService,
    private paginationService: PaginationService,
    private communicationService: CommunicationService
  ) {
    this.communicationService.waitIfPageDoesNotExists().subscribe((result) => {
      if (result !== undefined) {
        this.paginationService.getPage(result.pageable).subscribe(
          response => this.handleSuccessfulResponse(response),
        );
      }
    });

  }

  ngOnInit() {
    this.communicationService.updatedPage(this.page);
    this.getData();

    this.colmDef = [
      {
        headerName: 'Id',
        field: 'id',
        width: 80,
        sortable: true,
        filter: true,
        rowDrag: true,
      },
      {
        headerName: 'Create date',
        field: 'createDate',
        width: 200,
        valueFormatter: function (params) {
          return moment(params.value).format('D MMM YYYY HH:mm');
        },
        sortable: true,
        filter: 'agDateColumnFilter',
        filterParams: {
          comparator: function (filterLocalDateAtMidnight, cellValue) {
            let dateAsString = cellValue;
            if (dateAsString == null) return -1;
            let dateParts = dateAsString.split('/');
            let cellDate = new Date(Number(dateParts[2]), Number(dateParts[1]) - 1, Number(dateParts[0]));
            if (filterLocalDateAtMidnight.getTime() == cellDate.getTime()) {
              return 0;
            }
            if (cellDate < filterLocalDateAtMidnight) {
              return -1;
            }
            if (cellDate > filterLocalDateAtMidnight) {
              return 1;
            }
          }
        },
        browserDatePicker: true,
      },
      {
        headerName: 'Description',
        field: 'description',
        width: 400,
        sortable: true,
        filter: true,
      },
      {
        headerName: 'Trash',
        width: 80,
        cellRenderer: 'deleteCellRender',
        colId: 'params',
        cellStyle: {'text-align': 'center'}

      },
      {
        headerName: 'Done',
        field: 'done',
        width: 80,
        sortable: true,
        cellRenderer: 'doneMessageRenderer',
        colId: 'params',
        cellStyle: {'text-align': 'center'}
      }
    ];
    this.defaultColDef = {filter: true};
    this.context = {componentParent: this};
    this.frameworkComponents = {
      doneMessageRenderer: DoneMessageRenderComponent,
      deleteCellRender: DeleteCellRender,
    };

  }


  private getData(): void {
    this.paginationService.getPage(this.page.pageable).subscribe(
      response => this.handleSuccessfulResponse(response),
    );
  }

  handleSuccessfulResponse(response) {
    this.page = response;
    this.tasks = response['content'];
    this.filteredTasks = this.tasks;
    this.communicationService.updatedPage(this.page);
    console.log('%c TASKS', 'color: green;');
    console.table(this.tasks);
    this.rowData = this.tasks;
  }

  public getCustomPage(pageNumber: number): void {
    this.page.pageable = this.paginationService.getCustomPage(this.page, pageNumber);
    this.getData();
  }

  public getNextPage(): void {
    this.page.pageable = this.paginationService.getNextPage(this.page);
    this.getData();
  }

  public getPreviousPage(): void {
    this.page.pageable = this.paginationService.getPreviousPage(this.page);
    this.getData();
  }

  public getPageInNewSize(pageSize: number): void {
    this.page.pageable = this.paginationService.getPageInNewSize(this.page, pageSize);
    this.getData();
  }


  public getTasks(): Array<Task> {
    return this.tasks;
  }

  public addTask(task: Task) {
    this.taskService.saveTask(task).subscribe(
      response => this.handleSuccess(response)
    );

    console.table(task);
  }

  private handleSuccess(response: Task) {
    this.tasks.push(response);
    this.getData();
    this.rowData = this.tasks;
    this.clearDescriptionInput();
  }

  private clearDescriptionInput() {
    var childNodes = (<HTMLInputElement>document.getElementsByName('description')[0]).value = '';
  }

  public deleteTask(task: Task) {
    let deleted: boolean = false;
    this.taskService.deleteTask(task.id).subscribe(
      response => this.handleSuccessOnDelete(response, task)
    );
  }

  private handleSuccessOnDelete(response: any, task: Task) {
    this.getData();
    this.tasks = this.tasks.filter(t => t.id !== task.id);
    this.filteredTasks = this.tasks.filter(t => t.id !== task.id);
  }

  private refreshPageWithNewPageSize(newPageSize: number) {
    this.page.pageable.pageSize = newPageSize;
    this.getData();
  }

  private search(searchCriteria: string) {
    if (this.filteredTasks == null || searchCriteria == '') {
      this.filteredTasks = this.tasks;
    }
    if (searchCriteria != '') {
      this.filteredTasks = this.tasks.filter(task => {
        return task.description.toLocaleLowerCase().match(searchCriteria.toLocaleLowerCase());
      });
    }
  }

  onGridReady(params) {
    this.gridApis = params.api;
    this.gridColumnsApi = params.columnApi;
    params.api.setRowData(this.tasks);
  }

  updateTask(task: Task) {
    task.done = !task.done;
    this.taskService.updateTask(task);
  }

}

