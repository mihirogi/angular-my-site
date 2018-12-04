import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ArtService } from './art.service';

describe('ArtService', () => {
  beforeEach(() => TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ArtService]
    })
  );
  it('should be created', () => {
    const service = TestBed.get(ArtService);
    expect(service).toBeTruthy();
  });
});
