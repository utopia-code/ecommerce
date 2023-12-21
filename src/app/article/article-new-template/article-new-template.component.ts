import { Component } from '@angular/core';
import { Article } from '../../models/article';

@Component({
  selector: 'app-article-new-template',
  templateUrl: './article-new-template.component.html',
  styleUrl: './article-new-template.component.scss'
})
export class ArticleNewTemplateComponent {
  public article: Article;

  constructor() {
    this.article = new Article(4, '', '', 0, false, 0)
  }

  createArticle(templateForm) {
    if (templateForm.valid) {
      const articleForm = templateForm.value.article;
      this.article.name = articleForm.name;
      this.article.price = articleForm.price;
      this.article.imageUrl = articleForm.imageUrl;
      this.article.isOnSale = articleForm.isOnSale;

      console.log('Article object', this.article);
    } else {
      console.error('Template form is in an invalid state', templateForm.value);
    }
  }

  validateImageUrl(url: string): boolean {
    const imageUrlPattern = /^(https?|ftp):\/\/[A-Za-z0-9.-]+\.[A-Za-z]{2,3}(\/[^\/\s]*)*$/;
    return imageUrlPattern.test(url);
  }
}
