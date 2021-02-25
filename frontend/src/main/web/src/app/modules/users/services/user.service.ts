import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../../../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }
  baseUrl = 'http://localhost:8080/users';

  getUsers() {
    return this.http.get(this.baseUrl);
  }

  getUserById(id: number) {
    return this.http.get(this.baseUrl + '?id=' + id);
  }

  createUser(user: User) {
    return this.http.post(this.baseUrl + 'user', user);
  }

  updateUser(user: User) {
    return this.http.put(this.baseUrl + 'user/' + user.id, user);
  }

  deleteUser(id: number){
    return this.http.delete(this.baseUrl + 'user/' + id);
  }
}
