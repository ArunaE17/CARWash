import { TestBed } from '@angular/core/testing';

import { CustauthGuardService } from './custauth-guard.service';

describe('CustauthGuardService', () => {
  let service: CustauthGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustauthGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
