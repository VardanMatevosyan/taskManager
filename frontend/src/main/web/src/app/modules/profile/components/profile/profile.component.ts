import { Component, OnInit } from '@angular/core';
import {User} from '../../../../models/User';
import {UserProfileService} from '../services/user-profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: User = new User();

  constructor(private userProfileService: UserProfileService) {}

  ngOnInit() {
    this.userProfileService.getUserProfile()
    .subscribe(data => this.user = data as User);
  }
}
