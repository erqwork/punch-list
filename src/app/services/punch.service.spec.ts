import { TestBed } from '@angular/core/testing';

import { PunchService } from './punch.service';

describe('PunchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PunchService = TestBed.get(PunchService);
    expect(service).toBeTruthy();
  });
});