import { Component, EventEmitter, Input, ChangeDetectionStrategy, Output } from '@angular/core';
import { Article } from '../../models/article';
import { ArticleQuantityChange } from '../../models/article-quantity-change';

@Component({
  selector: 'app-article-item',
  templateUrl: './article-item.component.html',
  styleUrl: './article-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticleItemComponent {
  @Input() public article: Article;
  @Output() public quantityChange: EventEmitter<ArticleQuantityChange> = new EventEmitter();

  constructor() {}

  incrementInCart() {
    this.quantityChange.emit({ article: this.article, changeInQuantity: 1 });
  }

  decrementInCart() {
    if (this.article.quantityInCart > 0) {
      this.quantityChange.emit({ article: this.article, changeInQuantity: -1 })
    }
  }
}
