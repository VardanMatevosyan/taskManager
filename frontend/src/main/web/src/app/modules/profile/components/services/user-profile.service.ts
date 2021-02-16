import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {
  baseUrl = 'http://localhost:8080/users';

  constructor(private http: HttpClient) { }

  getUserProfile() {
    // return this.http.get(this.baseUrl + 'user?access_token=' + JSON.parse(window.sessionStorage.getItem('token')).access_token);
    return this.http.get(this.baseUrl + '/me');
  }
}
