import { TestBed } from '@angular/core/testing';

import { SharedUsersService } from './shared-users.service';

describe('SharedUsersService', () => {
  let service: SharedUsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedUsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
