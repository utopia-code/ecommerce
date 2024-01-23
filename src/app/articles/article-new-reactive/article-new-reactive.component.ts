import { Component } from '@angular/core';
import { Article } from '../../models/article';
import { FormGroup } from '@angular/forms';
import { Validators, FormBuilder } from '@angular/forms';
import { CustomValidator } from '../../validators/custom-validator';
import { ArticleService } from '../../services/article.service';

@Component({
  selector: 'app-article-new-reactive',
  templateUrl: './article-new-reactive.component.html',
  styleUrl: './article-new-reactive.component.scss'
})
export class ArticleNewReactiveComponent {

  public article: Article;
  public reactiveForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private articleService: ArticleService) {
      this.createForm();
    }

  createForm() {
    this.reactiveForm = this.fb.group({
      name: [null, [Validators.required, Validators.compose([CustomValidator.NameArticleValidator(['Prueba', 'Test', 'Mock', 'Fake'])])]],
      price: [null, [Validators.required, Validators.min(0.1)]],
      imageUrl: [null, [Validators.required, Validators.pattern(/^http(s?):\/\/[A-Za-z0-9.-]+\.[A-Za-z]{2,3}(\/[^\/\s]*)*$/)]],
      isOnSale: false
    });
  }

  onSubmit() {
    if (this.reactiveForm.valid) {
      const newArticle: Article = Object.assign({}, this.reactiveForm.value);
      this.article = newArticle;
      this.articleService.create(newArticle)
      .subscribe((success: any) => {
          if (success) {
            console.log('Form Control Value', this.reactiveForm.value);
            console.log('Article object', this.article);
            console.log(newArticle);

            this.reactiveForm.reset();
          } 
        }, err => { console.error(`Article with ID ${this.article.id} already exists`, err); });
    } else {
      console.error('New Reactive Article form is in an invalid state');
    }
  }

  get name() { return this.reactiveForm.get('name')}
  get price() { return this.reactiveForm.get('price')}
  get imageUrl() { return this.reactiveForm.get('imageUrl')}
}
