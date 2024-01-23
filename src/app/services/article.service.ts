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

  getArticles(query?: string) : Observable<Article[]> {
    return this.http.get<Article[]>(this.urlAPI, { params: { q: query } });
  }

  changeQuantity(articleID: number, changeInQuantity: number): Observable<any> {
    return this.http.patch(`${this.urlAPI}/${articleID}`,
    { changeInQuantity: changeInQuantity })
  }

  create(article: Article): Observable<Article> {
    return this.http.post<Article>(this.urlAPI, article)
  }
}
