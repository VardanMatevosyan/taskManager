import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import 'rxjs-compat/add/operator/filter';

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
              private route: ActivatedRoute) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.compose([Validators.required])],
      password: ['', Validators.required]
    });

//   onSubmit() {
//     if (this.loginForm.invalid) {
//       return;
//     }
//     const body = new HttpParams()
//       .set('username', this.loginForm.controls.username.value)
//       .set('password', this.loginForm.controls.password.value)
//       .set('grant_type', 'password');
// console.log(this.loginForm.controls.username.value);
// console.log(body.toString());
//     this.apiService.login(body.toString()).subscribe(data => {
//       // window.sessionStorage.setItem('token', data.toString());
//       window.localStorage.setItem('token', JSON.stringify(data));
//       console.log(window.localStorage.getItem('token'));
//       console.log(data);
//       this.router.navigate(['list-user']);
//     }, error => {
//       alert(error.error.error_description);
//       alert(body);
//     });
//   }

  }

}

