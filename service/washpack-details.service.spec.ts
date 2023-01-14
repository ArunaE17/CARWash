import { TestBed } from '@angular/core/testing';

import { WashpackDetailsService } from './washpack-details.service';

describe('WashpackDetailsService', () => {
  let service: WashpackDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WashpackDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
