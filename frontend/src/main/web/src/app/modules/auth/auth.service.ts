import {HttpClient} from '@angular/common/http';
import {UserAuth} from './payload/user-auth';
import {Injectable} from "@angular/core";

@Injectable()
export class AuthService {
  isLoggedIn = false;

  constructor(private http: HttpClient) { }

  isAuthenticated(): boolean {
    const token = window.localStorage.getItem('token');
    return token !== null;
  }

  login(payload: UserAuth) {
    this.isLoggedIn = true;
    return this.http.post('http://localhost:8080/auth/' + 'login', payload);
  }

  logout() {
    this.isLoggedIn = false;
  }
}
