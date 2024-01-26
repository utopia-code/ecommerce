import { Injectable } from '@angular/core';
import { ArticleService } from '../services/article.service';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Article } from '../models/article';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleLoadResolverService implements Resolve<Article>{

  constructor(private articleService: ArticleService) { }

  resolve(route: ActivatedRouteSnapshot, 
          state: RouterStateSnapshot): Article | Observable<Article> | Promise<Article> {
    const articleID = route.paramMap.get('id');
    return this.articleService.getArticle(+articleID);
  }
}
