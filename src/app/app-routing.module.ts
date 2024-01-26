import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './guards/auth-guard.service';

import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { ArticleListComponent } from './articles/article-list/article-list.component';
import { ArticleNewReactiveComponent } from './articles/article-new-reactive/article-new-reactive.component';
import { ArticleDetailComponent } from './articles/article-detail/article-detail.component';
import { ArticleNewDeactivateGuardService } from './guards/article-new-deactivate-guard.service';
import { ArticleLoadResolverService } from './guards/article-load-resolver.service';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'article/list', component: ArticleListComponent, 
    canActivate: [AuthGuardService]  },
  { path: 'article/create', component: ArticleNewReactiveComponent, 
    canActivate: [AuthGuardService],
    canDeactivate: [ArticleNewDeactivateGuardService] },
  { path: 'article/:id', component: ArticleDetailComponent, 
    canActivate: [AuthGuardService],
    resolve: { article: ArticleLoadResolverService} },
  { path: '**', redirectTo: '/login'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
