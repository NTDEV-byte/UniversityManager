import { TestBed } from '@angular/core/testing';

import { FormationsService } from './formations.service';

describe('FormationsService', () => {
  let service: FormationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
