import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { finalize } from 'rxjs/operators';

import { environment } from '@env/environment';
import { Logger, untilDestroyed } from '@core';
import { AuthenticationService } from './authentication.service';

const log = new Logger('Login');

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  version: string | null = environment.version;
  error: string | undefined;
  loginForm!: FormGroup;
  isLoading = false;
  submitted = false;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService
  ) {
    this.createForm();
  }

  // userEmails = new FormGroup({
  //   password: new FormControl('',[
  //     Validators.required,
  //     Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")])
  //   });

  get primEmail() {
    return this.loginForm.get('email');
  }
  get pswd() {
    return this.loginForm.get('password');
  }
  ngOnInit() {}

  ngOnDestroy() {}

  get f() {
    return this.loginForm.controls;
  }
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    } else {
      this.authenticationService.setIsAuth(true);
      this.router.navigate(['home']);
    }
  }

  btnClick = function () {
    this.router.navigateByUrl('/signup');
  };
  login() {
    this.isLoading = true;
  }

  private createForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$')]],
      password: ['', [Validators.required]],
      remember: true,
    });
  }
}
