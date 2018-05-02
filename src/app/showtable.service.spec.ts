import { TestBed, inject } from '@angular/core/testing';

import { ShowtableService } from './showtable.service';

describe('ShowtableService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShowtableService]
    });
  });

  it('should be created', inject([ShowtableService], (service: ShowtableService) => {
    expect(service).toBeTruthy();
  }));
});
