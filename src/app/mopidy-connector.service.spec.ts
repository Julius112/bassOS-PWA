import { TestBed, inject } from '@angular/core/testing';

import { MopidyConnectorService } from './mopidy-connector.service';

describe('MopidyConnectorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MopidyConnectorService]
    });
  });

  it('should be created', inject([MopidyConnectorService], (service: MopidyConnectorService) => {
    expect(service).toBeTruthy();
  }));
});
