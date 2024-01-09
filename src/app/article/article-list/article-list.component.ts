import { Component, OnInit } from '@angular/core';
import { Article } from '../../models/article';
import { ArticleQuantityChange } from '../../models/article-quantity-change';
import { ArticleService } from '../../services/article.service';

@Component({
  selector: 'app-article-list',
  template: `
    <div class="section-articles">
      <app-article-item *ngFor="let article of articles; index as i; trackBy: trackArticleById" 
        [article]="article"
        (articleQuantity)="onArticleQuantity($event)">
        <div class="article-sale"
            *ngIf="article.isOnSale">
            <button class="btn btn-dark btn-negative"
                (click)="removeArticle(i)"
                [disabled]="article.isDisabledButton() ? 'true' : null">&minus;</button>
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

  public articles: Article[];

  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    this.articles = this.articleService.getArticles();
  }

  onArticleQuantity(index: Article, quantity: number) {
    const articleChange: ArticleQuantityChange = this.articleService.changeQuantity(index.id, quantity);

    if (articleChange) {
      console.log('Reference to Article Object: ', index === articleChange.articleObj);
      console.log('Article: ' + JSON.stringify(articleChange.articleObj))
      console.log('Article quantity: ' + articleChange.totalQuantity)
    }
  }

  addArticle(index: number) {
    this.articles[index].quantityInCart++;
    this.onArticleQuantity(this.articles[index], this.articles[index].quantityInCart)
    
  }

  removeArticle(index: number) {
    if(this.articles[index].quantityInCart > 0) {
      this.articles[index].quantityInCart--;
    }
    this.onArticleQuantity(this.articles[index], this.articles[index].quantityInCart)
  }
  
  trackArticleById(index, article) {
    return article.id
  }
}
