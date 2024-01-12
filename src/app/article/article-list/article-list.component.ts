import { Component, OnInit } from '@angular/core';
import { Article } from '../../models/article';
import { ArticleService } from '../../services/article.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-article-list',
  template: `
    <div class="section-articles">
      <app-article-item *ngFor="let article of articles$ | async; trackBy: trackArticleById" 
        [article]="article"
        (articleQuantity)="onArticleQuantity($event)">
        <div class="article-sale"
            *ngIf="article.isOnSale">
            <button class="btn btn-dark btn-negative"
                (click)="removeArticle(article.id)"
                [disabled]="article.quantityInCart <= 0">&minus;</button>
            <div class="article-amount">{{ article.quantityInCart }}</div>
            <button class="btn btn-dark btn-positive"
            (click)="addArticle(article.id)">&plus;</button>
        </div>  
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

    .article-sale {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .article-amount {
      padding: 1rem;
    }
    `]
})
export class ArticleListComponent implements OnInit{

  public articles$: Observable<Article[]>;

  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    this.articles$ = this.articleService.getArticles()
  }

  addArticle(articleID: number) {
    this.articleService.changeQuantity(articleID, 1)
      .subscribe(
        response => {
          this.articles$ = this.articleService.getArticles();
        },
        error => console.error('Error adding article:', error)
      );
  }

  removeArticle(articleID: number) {
    this.articleService.changeQuantity(articleID, -1)
      .subscribe(
        response => {
          this.articles$ = this.articleService.getArticles();
        },
        error => console.error('Error removing article:', error)
      );
  }
  
  trackArticleById(article) {
    return article.id
  }
}
