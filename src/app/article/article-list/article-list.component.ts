import { Component, OnInit } from '@angular/core';
import { Article } from '../../models/article';

@Component({
  selector: 'app-article-list',
  template: `
    <div class="section-articles">
      <app-article-item *ngFor="let article of articles" [article]="article"></app-article-item>
    </div>`,
  styles: [`
    .section-articles {
      display: flex;
      justify-content: space-evenly;
      max-width: 1350px;
      margin: 0 auto;
      padding: 40px 20px;
    }
    `]
})
export class ArticleListComponent implements OnInit{

  public articles: Array<Article>;

  constructor() { }

  ngOnInit() {
    this.articles = [
      new Article('Abstract de Beatriz Jara', './assets/pexels-beatriz-jara-8882691.jpg', 185, true, 1),
      new Article('Sounds de Eberhard Grossgasteiger', './assets/pexels-eberhard-grossgasteiger-2086361.jpg', 375, false, 1),
      new Article('Portrait de Matt Fernandes', './assets/pexels-matt-fernandes-2807495.jpg', 295, true, 1)
  ];

    console.log(this.articles)
  }
}
