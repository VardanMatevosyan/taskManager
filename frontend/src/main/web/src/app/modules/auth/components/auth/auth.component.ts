import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import 'rxjs-compat/add/operator/filter';
import {UserAuth} from '../../payload/user-auth';
import {JwtTokenResponse} from '../../payload/jwt-token-response';
import {AuthService} from '../../auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  loginForm: FormGroup;
  invalidLogin = false;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private route: ActivatedRoute,
              private authService: AuthService) {
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.compose([Validators.required])],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }

    const userAuthRequestPayload: UserAuth = {
      username: this.loginForm.controls.username.value,
      password: this.loginForm.controls.password.value
    };

    this.authService.login(userAuthRequestPayload).subscribe(
      data => {
        const jwtToken = data as JwtTokenResponse;
        window.localStorage.setItem('token', jwtToken.accessToken);
        this.router.navigate(['tasks']);
        },
        error => {
        alert(error.error.error_description);
        alert(userAuthRequestPayload);
      });
  }
}

