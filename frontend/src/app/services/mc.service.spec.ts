import { TestBed, inject } from '@angular/core/testing';

import { McService } from './mc.service';

describe('McService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [McService]
    });
  });

  it('should be created', inject([McService], (service: McService) => {
    expect(service).toBeTruthy();
  }));
});
