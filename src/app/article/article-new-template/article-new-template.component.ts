import { Component } from '@angular/core';
import { Article } from '../../models/article';

@Component({
  selector: 'app-article-new-template',
  templateUrl: './article-new-template.component.html',
  styleUrl: './article-new-template.component.scss'
})
export class ArticleNewTemplateComponent {
  public article: Article;

  createArticle(templateForm) {
    console.log('Article form', templateForm.value );
    if (templateForm.valid) {
      console.log('Creating Article', templateForm);
    } else {
      console.error('Template form is in an invalid state')
    }
  }

  validateImageUrl(url: string): boolean {
    const imageUrlPattern = /^(https?|ftp):\/\/[A-Za-z0-9.-]+\.[A-Za-z]{2,3}(\/[^\/\s]*)*$/;
    return imageUrlPattern.test(url);
  }
}
