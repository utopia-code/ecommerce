import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, switchMap,
         distinctUntilChanged, startWith,
         share, merge } from 'rxjs/operators';

import { Article } from '../../models/article';
import { ArticleQuantityChange } from '../../models/article-quantity-change';
import { ArticleService } from '../../services/article.service';

@Component({
  selector: 'app-article-list',
  template: `
    <div class="input-group rounded">
      <span class="input-group-text">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
        </svg>
      </span>
      <input class="form-control"
            name="searchBox"
            [(ngModel)]="searchString"
            placeholder="Search Here"
            (keyup)="search()">
    </div>
    <h2>We have found {{(articles$ | async)?.length}} articles!</h2>
    <div class="section-articles">
      <app-article-item *ngFor="let article of articles$ | async; trackBy: trackArticleById" 
        [article]="article"
        (quantityChange)="onQuantityChange($event)">
      </app-article-item>
    </div>`,
  styles: [`
    .section-articles {
      display: flex;
      justify-content: space-evenly;
      flex-wrap: wrap;
      max-width: 1350px;
      margin: 0 auto;
      padding: 40px 20px;
    }

    .input-group {
      margin: 50px auto 30px;
      max-width: 400px;
    }
    `],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticleListComponent implements OnInit{

  public articles$: Observable<Article[]>;
  public searchString: string = '';
  private searchTerms: Subject<string> = new Subject();
  private reloadArticleList: Subject<void> = new Subject();

  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    this.articles$ = this.searchTerms.pipe(
      startWith(this.searchString),
      debounceTime(500),
      distinctUntilChanged(),
      merge(this.reloadArticleList),
      switchMap((q) => this.articleService.getArticles(this.searchString)));
  }

  search() {
    this.searchTerms.next(this.searchString);
  }

  onQuantityChange(change: ArticleQuantityChange) {
    this.articleService.changeQuantity(change.article.id, change.changeInQuantity)
      .subscribe((res) => {
        console.log(res.msg);
        this.reloadArticleList.next();
      })
  }

  onNew() {
    this.searchTerms.next(this.searchString)
  }
  
  trackArticleById(article) {
    return article.id
  }
}
