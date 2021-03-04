import {OnInit} from '@angular/core/src/metadata/lifecycle_hooks';
import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../../../auth.service';
import {UserAuthRegistration} from '../../../payload/user-auth-registration';
import {ApiResponse} from '../../../payload/api-response';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registrationForm: FormGroup;
  invalidLogin = false;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private route: ActivatedRoute,
              private authService: AuthService) {
  }

  ngOnInit(): void {
    this.registrationForm = this.formBuilder.group({
      username: ['', Validators.compose([Validators.required])],
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.registrationForm.invalid) {
      return;
    }

    const userAuthRegistrationRequestPayload: UserAuthRegistration = {
      username: this.registrationForm.controls.username.value,
      email: this.registrationForm.controls.email.value,
      password: this.registrationForm.controls.password.value,
    };

    this.authService.signUp(userAuthRegistrationRequestPayload).subscribe(
      data => {
        const response = data as ApiResponse;
        if (response.success === true) {
          alert(response.message);
          this.router.navigate(['auth']);
        }
      },
      error => {
        this.invalidLogin = true;
        alert(error.error.error_description);
        alert(userAuthRegistrationRequestPayload);
      });
  }
}
