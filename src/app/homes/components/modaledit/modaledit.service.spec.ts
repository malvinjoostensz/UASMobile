import { TestBed } from '@angular/core/testing';

import { ModaleditService } from './modaledit.service';

describe('ModaleditService', () => {
  let service: ModaleditService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModaleditService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
