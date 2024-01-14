import { Injectable } from '@angular/core';
import { Article } from '../models/article';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private urlAPI = 'http://localhost:3000/api/articles';

  constructor(private http: HttpClient) {}

  getArticles(query: string) : Observable<Article[]> {
    return this.http.get<Article[]>(`${this.urlAPI}?q=${query}`);
  }

  changeQuantity(articleID: number, changeInQuantity: number): Observable<Article> {
    return this.http.patch<Article>(`${this.urlAPI}/${articleID}`,
    { changeInQuantity })
  }

  create(article: Article): Observable<any> {
    return this.http.post(this.urlAPI, article)
  }
}
