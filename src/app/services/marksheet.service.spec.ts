import { TestBed } from '@angular/core/testing';

import { MarksheetService } from './marksheet.service';

describe('MarksheetService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MarksheetService = TestBed.get(MarksheetService);
    expect(service).toBeTruthy();
  });
});
