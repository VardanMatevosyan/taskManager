import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../auth/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
  }

  onLogout() {
    this.authService.loguot().subscribe(
      () => {
        window.localStorage.removeItem('token');
        this.router.navigate(['auth']);
      },
      error => {
        alert(error);
      }
    );
  }

}
