import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { ArticleListComponent } from './articles/article-list/article-list.component';
import { ArticleNewReactiveComponent } from './articles/article-new-reactive/article-new-reactive.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'articles/list', component: ArticleListComponent },
  { path: 'articles/create', component: ArticleNewReactiveComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
