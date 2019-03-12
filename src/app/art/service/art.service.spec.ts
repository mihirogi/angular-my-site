import { TestBed } from '@angular/core/testing';

import { ArtService } from './art.service';
import { HttpClientModule } from '@angular/common/http';

describe('ArtService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [ArtService]
    });
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 20000;
  });
  it('should be created', () => {
    const service = TestBed.get(ArtService);
    expect(service).toBeTruthy();
  });

  it('Scrapboxの記事を読み取る', (done: DoneFn) => {
    const service: ArtService = TestBed.get(ArtService);
    service.getArt().subscribe(response => {
      console.log(response.message);
      expect(response.message).not.toBeNull();
      done();
    });
  });
});
