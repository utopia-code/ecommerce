import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleNewReactiveTemplateComponent } from './article-new-reactive-template.component';

describe('ArticleNewReactiveTemplateComponent', () => {
  let component: ArticleNewReactiveTemplateComponent;
  let fixture: ComponentFixture<ArticleNewReactiveTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArticleNewReactiveTemplateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArticleNewReactiveTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
