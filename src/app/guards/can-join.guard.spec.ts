import { TestBed } from '@angular/core/testing';

import { CanJoinGuard } from './can-join.guard';

describe('CanJoinGuard', () => {
  let guard: CanJoinGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanJoinGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
