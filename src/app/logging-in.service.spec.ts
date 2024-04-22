import { TestBed } from '@angular/core/testing';

import { LoggingInService } from './logging-in.service';

describe('LoggingInService', () => {
  let service: LoggingInService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoggingInService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
