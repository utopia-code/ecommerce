import { Component, OnInit } from '@angular/core';
import { Article } from '../../models/article';
import { ArticleService } from '../../services/article.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrl: './article-detail.component.scss'
})
export class ArticleDetailComponent implements OnInit {

  public article: Article;

  constructor(private articleService: ArticleService,
              private route: ActivatedRoute) {}

  ngOnInit(): void {
    const articleID = this.route.snapshot.paramMap.get('id');
    this.articleService.getArticle(+articleID)
      .subscribe(article => this.article = article);
  }

  incrementInCart() {
    this.article.quantityInCart += 1;

    this.articleService.changeQuantity(this.article.id, 1)
      .subscribe(
        (res) => {
          console.log(res.msg);
        },
        error => console.error('Error adding article:', error)
      );
  }

  decrementInCart() {
    if (this.article.quantityInCart > 0) {
      this.article.quantityInCart -= 1;
    }

    this.articleService.changeQuantity(this.article.id, -1)
      .subscribe(
        (res) => {
          console.log(res.msg);
        },
        error => console.error('Error removing article:', error)
      );
  }
}
