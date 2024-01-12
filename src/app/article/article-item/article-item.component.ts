import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Article } from '../../models/article';

@Component({
  selector: 'app-article-item',
  templateUrl: './article-item.component.html',
  styleUrl: './article-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticleItemComponent implements OnInit {
  @Input() public article: Article;

  constructor() {}

  ngOnInit() {}
}
