import { TestBed } from '@angular/core/testing';

import { NonfictionService } from './nonfiction.service';

describe('NonfictionService', () => {
  let service: NonfictionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NonfictionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
