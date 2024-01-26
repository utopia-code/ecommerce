import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserStoreService {

  private _token: string = null;

  constructor() {
    this._token = localStorage.getItem('authToken')
  }

  set token(token: string) {
    this._token = token;
    localStorage.setItem('authToken', token);
  }

  get token() {
    return this._token;
  }

  isLoggedIn() {
    return this.token != null;
  }
}
