import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../../service/http-client.service';
import { PaginationService } from '../../services/pagination/pagination.service';
import {Task} from '../../models/Task'
import {Page} from '../../models/pagination/page'
import { Pageable } from '../../models/pagination/pageable';
import { CommunicationService } from '../../services/communication/communication.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})

export class TasksComponent implements OnInit {
	private tasks: Array<Task>;
	private filteredTasks: Array<Task>;
  private page: Page<Task> = new Page();

  constructor(
	private httpClientService: HttpClientService,
	private paginationService: PaginationService,
	private communicationService: CommunicationService
  ) {
    this.communicationService.waitIfPageDoesNotExists().subscribe((result) => {
    if (result != undefined) {
        this.paginationService.getPage(result.pageable).subscribe(
            response => this.handleSuccessfulResponse(response),
        );
     }
    });
  }

  ngOnInit() {
    this.getData();
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
      console.log('%c TASKS', "color: green;")
      console.table(this.tasks);
    }

   public getCustomPage(pageNumber: number): void {
   console.log(pageNumber);
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
    this.httpClientService.saveTask(task).subscribe(
      response => this.handleSuccess(response)
    );

    console.log('%c Add new TASK', "color: green;")
    console.table(task);
  }

  private handleSuccess(response: Task) {
    this.tasks.push(response);
    this.clearDescriptionInput();
  }

  private clearDescriptionInput() {
    var childNodes = (<HTMLInputElement>document.getElementsByName("description")[0]).value = "";
  }

  public deleteTask(task: Task) {
    let deleted: boolean = false;
    this.httpClientService.deleteTask(task.id).subscribe(
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
    if (this.filteredTasks == null || searchCriteria == "") {
      this.filteredTasks = this.tasks;
    }
    if (searchCriteria != "") {
       this.filteredTasks = this.tasks.filter(task => {
              return task.description.toLocaleLowerCase().match(searchCriteria.toLocaleLowerCase());
        });
    }
  }
}
