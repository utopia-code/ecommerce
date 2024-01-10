import { Component, OnInit } from '@angular/core';
import { Article } from '../../models/article';
import { ArticleQuantityChange } from '../../models/article-quantity-change';
import { ArticleService } from '../../services/article.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-article-list',
  template: `
    <div class="section-articles">
      <app-article-item *ngFor="let article of articles$ | async; index as i; trackBy: trackArticleById" 
        [article]="article"
        (articleQuantity)="onArticleQuantity($event)">
        <div class="article-sale"
            *ngIf="article.isOnSale">
            <button class="btn btn-dark btn-negative"
                (click)="removeArticle(i)"
                [disabled]="isArticleDisabled(article)">&minus;</button>
            <div class="article-amount">{{ article.quantityInCart }}</div>
            <button class="btn btn-dark btn-positive"
            (click)="addArticle(i)">&plus;</button>
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

  onArticleQuantity(change: ArticleQuantityChange) {

    this.articleService.changeQuantity(change.articleObj.id, change.totalQuantity)
      .subscribe(
        updatedArticle => {
          console.log('Reference to Article Object: ', change.articleObj === updatedArticle.articleObj);
          console.log('Article: ' + JSON.stringify(updatedArticle.articleObj));
          console.log('Article quantity: ' + updatedArticle.totalQuantity);
        },
        error => console.error('Error changing quantity:', error)
      );
  }

  addArticle(index: number) {
    this.articles$.subscribe(articles => {
      articles[index].quantityInCart++;
      const change: ArticleQuantityChange = {
        articleObj: articles[index],
        totalQuantity: articles[index].quantityInCart
      };
      this.onArticleQuantity(change);
    });
    
  }

  removeArticle(index: number) {

    this.articles$.subscribe(articles => {
      if (articles[index].quantityInCart > 0) {
        articles[index].quantityInCart--;
      }
      const change: ArticleQuantityChange = {
        articleObj: articles[index],
        totalQuantity: articles[index].quantityInCart
      };
      this.onArticleQuantity(change);
    });
  }

  isArticleDisabled(article: Article): boolean {
    return Article.isDisabledButton(article);
  }
  
  trackArticleById(index, article) {
    return article.id
  }
}
