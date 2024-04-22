import { TestBed } from '@angular/core/testing';

import { UsersForLoggingInService } from './users-for-logging-in.service';

describe('UsersForLoggingInService', () => {
  let service: UsersForLoggingInService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersForLoggingInService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
