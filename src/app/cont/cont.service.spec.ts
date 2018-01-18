import { TestBed, inject } from '@angular/core/testing';

import { ContService } from './cont.service';

describe('ContService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContService]
    });
  });

  it('should be created', inject([ContService], (service: ContService) => {
    expect(service).toBeTruthy();
  }));
});
