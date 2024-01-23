import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Login } from '../../models/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  public login: Login;
  public loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
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
      const newLogin: Login = Object.assign({}, this.loginForm.value);
      this.login = newLogin;
      console.log(newLogin)
    }
  }

  get username() { return this.loginForm.get('username') }
  get password() { return this.loginForm.get('password') }
}
