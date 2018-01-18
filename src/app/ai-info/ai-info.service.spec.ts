import { TestBed, inject } from '@angular/core/testing';

import { AiInfoService } from './ai-info.service';

describe('AiInfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AiInfoService]
    });
  });

  it('should be created', inject([AiInfoService], (service: AiInfoService) => {
    expect(service).toBeTruthy();
  }));
});
