import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router'
import { UserStoreService } from '../services/user-store.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private userStore: UserStoreService,
              private router: Router) { }
  
  canActivate(): boolean  {
    console.log('AuthGuard canActivate called');

    if (this.userStore.isLoggedIn()) { return true }

    console.log('AuthGuard canActivate not authorized to access page');

    this.router.navigate(['user', 'login']);

    return false;
  }
}
