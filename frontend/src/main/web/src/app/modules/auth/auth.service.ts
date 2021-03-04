import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {UserAuthRegistration} from './payload/user-auth-registration';
import {UserAuthLogin} from './payload/user-auth-login';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) { }

  isAuthenticated(): boolean {
    const token = window.localStorage.getItem('token');
    return token !== null;
  }

  login(payload: UserAuthLogin) {
    return this.http.post('http://localhost:8080/auth/' + 'login', payload);
  }

  signUp(payload: UserAuthRegistration) {
    return this.http.post('http://localhost:8080/auth/' + 'signup', payload);
  }

  loguot() {
    return this.http.post('http://localhost:8080/auth/' + 'logout', {});
  }

}
