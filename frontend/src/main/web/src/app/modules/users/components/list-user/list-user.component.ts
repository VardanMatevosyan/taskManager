import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../services/user.service';
import {User} from '../../../../models/User';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  users: any;

  constructor(private router: Router, private apiService: UserService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.apiService.getUsers()
      .subscribe( data => {
        console.log(data);
        this.users = data;
      });
  }

  deleteUser(user: User): void {
    this.apiService.deleteUser(user.id)
      .subscribe( data => {
        this.users = this.users.filter(u => u !== user);
      });
  };

  editUser(user: User): void {
    window.sessionStorage.removeItem('editUserId');
    window.sessionStorage.setItem('editUserId', user.id.toString());
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  addUser(): void {
    this.router.navigate(['add'], {relativeTo: this.route});
  }
}
