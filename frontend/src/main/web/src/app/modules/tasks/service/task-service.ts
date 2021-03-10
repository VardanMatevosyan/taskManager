import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Task } from 'src/app/models/Task';


@Injectable()
export class TaskService implements OnInit {

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
  }

  public getTasks(): Observable<any> {
    return this.http.get('//localhost:8080/tasks');
  }

  public updateTask(task: Task): Observable<any> {
    return this.http.put<Task>('//localhost:8080/tasks/update', task);
  }

  public saveTask(task: Task): Observable<any> {
    return this.http.post<Task>('//localhost:8080/tasks/save', task);
  }

  public deleteTask(id: string): Observable<any> {
    return this.http.delete<Task>('//localhost:8080/tasks/delete/' + id);
  }

}

