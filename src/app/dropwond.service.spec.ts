import { TestBed } from '@angular/core/testing';

import { DropwondService } from './dropwond.service';

describe('DropwondService', () => {
  let service: DropwondService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DropwondService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
