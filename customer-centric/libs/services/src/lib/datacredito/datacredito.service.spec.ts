import { TestBed } from '@angular/core/testing';

import { DatacreditoService } from './datacredito.service';

describe('DatacreditoService', () => {
  let service: DatacreditoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatacreditoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
