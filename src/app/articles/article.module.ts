import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { ArticleItemComponent } from './article-item/article-item.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleNewReactiveComponent } from './article-new-reactive/article-new-reactive.component';

import { ArticleRoutingModule } from './article-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DefectImgPipe } from '../pipes/defect-img.pipe';


@NgModule({
  declarations: [
    ArticleDetailComponent,
    ArticleItemComponent,
    ArticleListComponent,
    ArticleNewReactiveComponent,
    DefectImgPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ArticleRoutingModule
  ]
})
export class ArticleModule { }
