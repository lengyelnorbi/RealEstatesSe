import { TestBed } from '@angular/core/testing';

import { ModAdvertGuard } from './mod-advert.guard';

describe('ModAdvertGuard', () => {
  let guard: ModAdvertGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ModAdvertGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
