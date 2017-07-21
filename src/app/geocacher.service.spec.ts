import { TestBed, inject } from '@angular/core/testing';

import { GeocacherService } from './geocacher.service';

describe('GeocacherService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GeocacherService]
    });
  });

  it('should ...', inject([GeocacherService], (service: GeocacherService) => {
    expect(service).toBeTruthy();
  }));
});
