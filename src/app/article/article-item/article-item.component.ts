import { Component } from '@angular/core';
import { Article } from '../../models/article';

@Component({
  selector: 'app-article-item',
  templateUrl: './article-item.component.html',
  styleUrl: './article-item.component.scss'
})
export class ArticleItemComponent {
  public article: Article;

  constructor() {}

  ngOnInit() {
    this.article = new Article('Ilustración 7 de Sanchi Herrera', '../../../assets/pexels-beatriz-jara-8882691.jpg', 187, true, 1)
  }

  addArticle() {
    return this.article.quantityInCart++;
  }

  removeArticle() {
    if (this.article.quantityInCart > 0) {
      return this.article.quantityInCart--;
    }
  }
}
