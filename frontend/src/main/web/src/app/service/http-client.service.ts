import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Task} from '../models/Task'

@Injectable({
  providedIn: 'root'
})

export class HttpClientService {


  constructor(private http: HttpClient) { }

 public getTasks(): Observable<any> {
   return this.http.get("//localhost:8080/tasks");
}

public updateTask(task: Task): Observable<any> {
	return this.http.put<Task>("//localhost:8080/tasks/update", task);
}

}

