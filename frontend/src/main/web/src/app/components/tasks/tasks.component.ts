import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../../service/http-client.service';
import { PaginationService } from '../../services/pagination/pagination.service';
import {Task} from '../../models/Task'
import {Page} from '../../models/pagination/page'
import { Pageable } from '../../models/pagination/pageable';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})

export class TasksComponent implements OnInit {
	tasks:   Array<Task>;
 private page: Page<Task> = new Page();


  constructor(
	private httpClientService: HttpClientService,
	private paginationService: PaginationService
  ) { }

  ngOnInit() {
  this.getData();

  }
   private getData(): void {
      this.paginationService.getPage(this.page.pageable).subscribe(
      response => this.handleSuccessfullResponse(response),
      );
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


    handleSuccessfullResponse(response) {
      this.page = response;
      this.tasks = response['content'];
      console.log('%c TASKS', "color: green;")
      console.table(this.tasks);
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
    this.clearInput();
  }

//value param does not exist WHAT?
  private clearInput() {
    var childNodes = document.getElementsByName("description")[0].innerHTML = "";
  }

  public deleteTask(task: Task) {
    let deleted: boolean = false;
    this.httpClientService.deleteTask(task.id).subscribe(
     this.tasks = this.tasks.filter(t => t.id !== task.id)
    );
  }


}
