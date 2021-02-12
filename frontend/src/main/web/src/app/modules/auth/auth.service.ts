export class AuthService {
  isLoggedIn = false;

  constructor() {
  }

  isAuthenticated(): boolean {
    const token = window.localStorage.getItem('token');
    return token !== null;
  }

  login() {
    this.isLoggedIn = true;
  }

  logout() {
    this.isLoggedIn = false;
  }
}
