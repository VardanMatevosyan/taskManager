import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-oauth2-redirect-handler',
  templateUrl: './oauth2-redirect-handler.component.html'
})
export class Oauth2RedirectHandlerComponent implements OnInit {

  constructor( private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    const token = this.getUrlParameter();
    window.localStorage.setItem('token', token);
    if (token) {
      this.router.navigate(['tasks']);
    } else {
      this.router.navigate(['/']);
    }
  }

  private getUrlParameter(): string {
    let token = '';
    this.route.queryParams.filter(params => params.token)
    .subscribe(params => {
      token = params.token;
    });
    console.log('token 2 ' + token);
    return token;
  }
}
