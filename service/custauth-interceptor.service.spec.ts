import { TestBed } from '@angular/core/testing';

import { CustauthInterceptorService } from './custauth-interceptor.service';

describe('CustauthInterceptorService', () => {
  let service: CustauthInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustauthInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
