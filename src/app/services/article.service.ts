import { Injectable } from '@angular/core';
import { Article } from '../models/article';
import { ArticleQuantityChange } from '../models/article-quantity-change';
import { Observable, throwError, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  public articles: Article[];

  constructor() {
    this.articles = [
      new Article(1,'Abstract de Beatriz Jara', './assets/pexels-beatriz-jara-8882691.jpg', 185, true, 1),
      new Article(2, 'Still life de Eberhard Grossgasteiger', './assets/pexels-eberhard-grossgasteiger-2086361.jpg', 375, false, 1),
      new Article(3, 'Portrait de Matt Fernandes', './assets/pexels-matt-fernandes-2807495.jpg', 295, true, 1)
    ];
  }

  getArticles() : Observable<Article[]> {
    return of(this.articles);
  }

  changeQuantity(articleID: number, changeInQuantity: number): Observable<ArticleQuantityChange> {
    const article = this.articles.find(a => a.id === articleID);
    if (article) {
      article.quantityInCart = changeInQuantity++;
      return of({
        articleObj: article,
        totalQuantity: article.quantityInCart
      });
    } 
  }

  create(article: Article): Observable<any> {
    let foundArticle = this.articles.find(a => a.id === article.id);
    if (foundArticle) {
      return throwError(() => ({ msg: `Article with ID ${article.id} already exists` }));
    }

    const lastArticle = this.articles[this.articles.length - 1];
    const newArticleId = lastArticle ? lastArticle.id + 1 : 1;

    article.id = newArticleId;
    article.quantityInCart = 1;

    this.articles.push(article);
    console.log('create article: ' + JSON.stringify(this.articles))
    return of(`Sucessfully created article with ID ${article.id}`);
  }
}
