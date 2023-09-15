import { TestBed } from '@angular/core/testing';

import { OnBaseService } from './on-base.service';

describe('OnBaseService', () => {
  let service: OnBaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OnBaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
