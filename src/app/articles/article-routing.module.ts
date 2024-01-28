import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleListComponent } from './article-list/article-list.component';
import { AuthGuardService } from '../guards/auth-guard.service';
import { ArticleNewReactiveComponent } from './article-new-reactive/article-new-reactive.component';
import { ArticleNewDeactivateGuardService } from '../guards/article-new-deactivate-guard.service';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { ArticleLoadResolverService } from '../guards/article-load-resolver.service';

const routes: Routes = [
  { path: 'list', component: ArticleListComponent, 
    canActivate: [AuthGuardService]  },
  { path: 'create', component: ArticleNewReactiveComponent, 
    canActivate: [AuthGuardService],
    canDeactivate: [ArticleNewDeactivateGuardService] },
  { path: ':id', component: ArticleDetailComponent, 
    canActivate: [AuthGuardService],
    resolve: { article: ArticleLoadResolverService} }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticleRoutingModule { }
