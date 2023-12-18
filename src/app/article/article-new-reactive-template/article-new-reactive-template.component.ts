import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-article-new-reactive-template',
  templateUrl: './article-new-reactive-template.component.html',
  styleUrl: './article-new-reactive-template.component.scss'
})
export class ArticleNewReactiveTemplateComponent {

  public reactiveForm: FormGroup = new FormGroup({
    name: new FormControl(null, Validators.required),
    price: new FormControl(0, Validators.required),
    imageUrl: new FormControl(null, Validators.required),
    isOnSale: new FormControl(null)
  });

  constructor() {}

  onSubmit() {
    console.log('Form Control Value', this.reactiveForm.value)
  }
}
