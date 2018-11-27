import { TestBed } from '@angular/core/testing';

import { MachinedataService } from './machinedata.service';

describe('MachinedataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MachinedataService = TestBed.get(MachinedataService);
    expect(service).toBeTruthy();
  });
});
