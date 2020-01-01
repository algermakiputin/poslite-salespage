import { TestBed } from '@angular/core/testing';

import { EnquiriesService } from './enquiries.service';

describe('EnquiriesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EnquiriesService = TestBed.get(EnquiriesService);
    expect(service).toBeTruthy();
  });
});
