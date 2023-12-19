import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators, FormBuilder } from '@angular/forms';
import { CustomValidator } from '../../custom-validator';

@Component({
  selector: 'app-article-new-reactive-template',
  templateUrl: './article-new-reactive-template.component.html',
  styleUrl: './article-new-reactive-template.component.scss'
})
export class ArticleNewReactiveTemplateComponent {

  public reactiveForm: FormGroup;

  

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.reactiveForm = this.fb.group({
      name: [null, [Validators.required, Validators.compose([CustomValidator.NameArticleValidator(['Prueba', 'Test', 'Mock', 'Fake'])])]],
      price: [null, [Validators.required, Validators.min(0.1)]],
      imageUrl: [null, [Validators.required, Validators.pattern(/^(https?|ftp):\/\/[A-Za-z0-9.-]+\.[A-Za-z]{2,3}(\/[^\/\s]*)*$/)]],
      isOnSale: [null]
    });
  }

  onSubmit() {
    console.log('Form Control Value', this.reactiveForm.value)
  }

  get name() { return this.reactiveForm.get('name')}
  get price() { return this.reactiveForm.get('price')}
  get imageUrl() { return this.reactiveForm.get('imageUrl')}
}
