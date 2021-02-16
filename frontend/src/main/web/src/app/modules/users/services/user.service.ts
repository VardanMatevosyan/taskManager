import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../../../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost:8080/users';

  login(loginPayload) {
    const headers = {
      'Authorization': 'Basic ' + btoa('taskManager-client:taskManager-secret'),
      'Content-type': 'application/x-www-form-urlencoded'
    };

    console.log(headers);
    return this.http.post('http://localhost:8080/' + 'oauth/token/', loginPayload, {headers});
  }

  getUsers() {
    // return this.http.get(this.baseUrl + 'user?access_token=' + JSON.parse(window.sessionStorage.getItem('token')).access_token);
    return this.http.get(this.baseUrl);
  }

  getUserById(id: number) {
    return this.http.get(this.baseUrl + '?id=' + id);
    // return this.http.get(this.baseUrl + 'user/' + id + '?access_token=' + JSON.parse(window.sessionStorage.getItem('token')).access_token);
  }

  createUser(user: User) {
    return this.http.post(this.baseUrl + 'user?access_token=' + JSON.parse(window.sessionStorage.getItem('token')).access_token, user);
  }

  updateUser(user: User) {
    return this.http.put(this.baseUrl + 'user/' + user.id + '?access_token=' + JSON.parse(window.sessionStorage.getItem('token')).access_token, user);
  }

  deleteUser(id: number){
    return this.http.delete(this.baseUrl + 'user/' + id + '?access_token=' + JSON.parse(window.sessionStorage.getItem('token')).access_token);
  }
}
