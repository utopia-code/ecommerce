import { TestBed } from '@angular/core/testing';

import { ArticleLoadResolverService } from './article-load-resolver.service';

describe('ArticleLoadResolverService', () => {
  let service: ArticleLoadResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArticleLoadResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
