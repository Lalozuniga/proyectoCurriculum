import { TestBed } from '@angular/core/testing';

import { AlgoritmosSimplesService } from './algoritmos-simples.service';

describe('AlgoritmosSimplesService', () => {
  let service: AlgoritmosSimplesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlgoritmosSimplesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
