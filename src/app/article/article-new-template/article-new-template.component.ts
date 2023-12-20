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
    templateForm.valid 
    ? console.log('Article form', templateForm.value )
    :  console.error('Template form is in an invalid state', templateForm);
  }

  validateImageUrl(url: string): boolean {
    const imageUrlPattern = /^(https?|ftp):\/\/[A-Za-z0-9.-]+\.[A-Za-z]{2,3}(\/[^\/\s]*)*$/;
    return imageUrlPattern.test(url);
  }
}
