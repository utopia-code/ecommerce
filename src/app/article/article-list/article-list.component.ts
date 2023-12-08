import { Component, OnInit } from '@angular/core';
import { Article } from '../../models/article';
import { ArticleQuantityChange } from '../../models/article-quantity-change';

@Component({
  selector: 'app-article-list',
  template: `
    <div class="section-articles">
      <app-article-item *ngFor="let article of articles; index as i; trackBy: trackArticleById" 
        [article]="article"
        (articleQuantity)="onArticleQuantity($event)">
        <div class="article-sale"
            *ngIf="article.isOnSale">
            <button class="btn btn-negative"
                (click)="removeArticle(i)"
                [disabled]="article.isDisabledButton() ? 'true' : null">&minus;</button>
            <div class="article-amount">{{ article.quantityInCart }}</div>
            <button class="btn btn-positive"
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

  public articles: Array<Article>;

  constructor() { }

  ngOnInit() {
    this.articles = [
      new Article(1,'Abstract de Beatriz Jara', './assets/pexels-beatriz-jara-8882691.jpg', 185, true, 1),
      new Article(2, 'Still life de Eberhard Grossgasteiger', './assets/pexels-eberhard-grossgasteiger-2086361.jpg', 375, false, 1),
      new Article(3, 'Portrait de Matt Fernandes', './assets/pexels-matt-fernandes-2807495.jpg', 295, true, 1)
    ];
  }

  onArticleQuantity(index, quantity) {
    const articleChange: ArticleQuantityChange = {
      articleObj: index,
      totalQuantity: quantity
    }

    console.log('Reference to Article Object: ', index === articleChange.articleObj);
    console.log('Article: ' + JSON.stringify(articleChange.articleObj))
    console.log('Article quantity: ' + articleChange.totalQuantity)
  }

  addArticle(index) {
    this.articles[index].quantityInCart++;
    this.onArticleQuantity(this.articles[index], this.articles[index].quantityInCart)
    
  }

  removeArticle(index) {
    if(this.articles[index].quantityInCart >0) {
      this.articles[index].quantityInCart--;
    }
    this.onArticleQuantity(this.articles[index], this.articles[index].quantityInCart)
  }
  
  trackArticleById(index, article) {
    return article.id
  }
}
