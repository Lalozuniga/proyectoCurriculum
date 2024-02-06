import { TestBed } from '@angular/core/testing';

import { InfinitescrollService } from './infinitescroll.service';

describe('InfinitescrollService', () => {
  let service: InfinitescrollService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfinitescrollService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
