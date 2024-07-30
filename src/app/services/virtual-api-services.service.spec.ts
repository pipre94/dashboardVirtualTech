import { TestBed } from '@angular/core/testing';

import { VirtualApiServicesService } from './virtual-api-services.service';

describe('VirtualApiServicesService', () => {
  let service: VirtualApiServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VirtualApiServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
