import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Login } from '../../models/login';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  public login: Login;
  public loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router) {
    this.createForm();
  }

  createForm() {
    this.loginForm = this.fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required, Validators.minLength(8)]]
    });
  }

  loginUser() {
    if (this.loginForm.valid) {
      const data: Login = Object.assign({}, this.loginForm.value);
      this.login = data;
      console.log(data)
      this.userService.login(data.username, data.password)
        .subscribe((success) => {
          if (success) {
            console.log('Successfully logged in', success);
            this.router.navigate(['article', 'create'])
          }
        }, (err) => {
          console.log('Error loggin in', err.error)
          this.router.navigate(['user', 'register'])
        })
    }
  }

  get username() { return this.loginForm.get('username') }
  get password() { return this.loginForm.get('password') }
}
