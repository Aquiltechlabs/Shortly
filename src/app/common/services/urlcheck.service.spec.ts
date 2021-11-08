import { TestBed } from '@angular/core/testing';

import { UrlcheckService } from './urlcheck.service';

describe('UrlcheckService', () => {
  let service: UrlcheckService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UrlcheckService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
