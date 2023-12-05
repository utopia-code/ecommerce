import { Component, OnInit } from '@angular/core';
import { Article } from '../../models/article';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrl: './article-list.component.scss'
})
export class ArticleListComponent implements OnInit{

  public articles: Array<Article>;

  constructor() { }

  ngOnInit() {
    this.articles = [
      new Article('Ilustración 7 de Sanchi Herrera', '../../../assets/pexels-beatriz-jara-8882691.jpg', 185, true, 1),
      new Article('Ilustración 8 de Sanchi Herrera', '../../../assets/pexels-eberhard-grossgasteiger-2086361.jpg', 375, false, 1),
      new Article('Ilustración 9 de Sanchi Herrera', '../../../assets/pexels-matt-fernandes-2807495.jpg', 295, true, 1)
  ];

    console.log(this.articles)
  }
}
