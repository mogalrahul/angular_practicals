import { TestBed, inject } from '@angular/core/testing';

import { SevenmService } from './sevenm.service';

describe('SevenmService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SevenmService]
    });
  });

  it('should be created', inject([SevenmService], (service: SevenmService) => {
    expect(service).toBeTruthy();
  }));
});
