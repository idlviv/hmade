import { TestBed } from '@angular/core/testing';

import { LibUserService } from './lib-user.service';

describe('LibUserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LibUserService = TestBed.get(LibUserService);
    expect(service).toBeTruthy();
  });
});
