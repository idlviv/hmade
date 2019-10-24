import { TestBed } from '@angular/core/testing';

import { NgUserManService } from './ng-user-man.service';

describe('NgUserManService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgUserManService = TestBed.get(NgUserManService);
    expect(service).toBeTruthy();
  });
});
