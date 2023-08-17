import { TestBed } from '@angular/core/testing';

import { HgeService } from './hge.service';

describe('HgeService', () => {
  let service: HgeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HgeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
