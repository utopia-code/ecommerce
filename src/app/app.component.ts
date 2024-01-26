import { Component, OnInit } from '@angular/core';
import { UserStoreService } from './services/user-store.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'Design Center';
  currentComponent: string = 'article-list';

  constructor(private userStore: UserStoreService,
              private router: Router) {}

  ngOnInit(): void {
    this.router.navigate(this.userStore.isLoggedIn() ? ['article', 'list'] : ['login'])
  }
  
}

