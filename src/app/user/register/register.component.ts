import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Login } from '../../models/login';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  public login: Login;
  public registerForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.registerForm = this.fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required, Validators.minLength(8)]]
    });
  }

  registerUser() {
    if (this.registerForm.valid) {
      const newData: Login = Object.assign({}, this.registerForm.value);
      this.login = newData;
      console.log(newData)
    }
  }

  get username() { return this.registerForm.get('username') }
  get password() { return this.registerForm.get('password') }
}
