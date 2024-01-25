import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Login } from '../../models/login';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  public login: Login;
  public registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router) {
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
      const data: Login = Object.assign({}, this.registerForm.value);
      this.login = data;
      console.log(data)
      this.userService.register(data.username, data.password)
        .subscribe((success) => {
          if (success) {
            console.log('Successfully registered', success);
            this.router.navigate(['login'])
          }
        }, (err) => {
          console.error('Error registering', err.error)
        })
    }
  }

  get username() { return this.registerForm.get('username') }
  get password() { return this.registerForm.get('password') }
}
