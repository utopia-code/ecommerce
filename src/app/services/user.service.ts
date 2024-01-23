import { Injectable } from '@angular/core';
import { Login } from '../models/login';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { UserStoreService } from './user-store.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private urlAPI = 'http://localhost:3000/api';

  constructor(
    private http: HttpClient,
    private userStore: UserStoreService) { }

  login(username: string, password: string): Observable<Login> {
    return this.http.post<Login>(`${this.urlAPI}/user/login`, {
      username: username,
      password: password
    }).pipe(map((res: any) => {
      this.userStore.token = res.token;
      return res
    }))
  }

  register(username: string, password: string): Observable<Login> {
    return this.http.post<Login>(`${this.urlAPI}/user/register`, {
      username: username,
      password: password
    })
  }
}
