import { TestBed } from '@angular/core/testing';

import { ArticleNewDeactivateGuardService } from './article-new-deactivate-guard.service';

describe('ArticleNewDeactivateGuardService', () => {
  let service: ArticleNewDeactivateGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArticleNewDeactivateGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
