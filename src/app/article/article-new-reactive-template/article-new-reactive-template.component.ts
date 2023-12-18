import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators, FormBuilder } from '@angular/forms';

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
      name: [null, Validators.required],
      price: [0, Validators.required],
      imageUrl: [null, Validators.required],
      isOnSale: [null]
    });
  }

  onSubmit() {
    console.log('Form Control Value', this.reactiveForm.value)
  }
}
