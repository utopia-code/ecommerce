import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Article } from '../../models/article';
import { ArticleQuantityChange } from '../../models/article-quantity-change';

@Component({
  selector: 'app-article-item',
  templateUrl: './article-item.component.html',
  styleUrl: './article-item.component.scss'
})
export class ArticleItemComponent implements OnInit {
  @Input() public article: Article;
  @Output() private articleQuantity = new EventEmitter<ArticleQuantityChange>;

  constructor() {}

  ngOnInit() {}

  private emitArticleQuantity() {
    this.articleQuantity.emit({
      articleObj: this.article,
      totalQuantity: this.article.quantityInCart
    });
  }

  addArticle() {
    this.article.quantityInCart++;
    this.emitArticleQuantity();
  }

  removeArticle() {
    if (this.article.quantityInCart > 0) {
      this.article.quantityInCart--;
      this.emitArticleQuantity();
    }
  }
}
