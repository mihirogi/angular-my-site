import { TestBed } from '@angular/core/testing';

import { ArtService } from './art.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Observable } from 'rxjs';

describe('ArtService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule,
      HttpClientTestingModule
    ]
  }));

  it('should be created', () => {
    const service: ArtService = TestBed.get(ArtService);
    expect(service).toBeTruthy();
  });

  it('scrapboxからart-mihirogiの記事をすべて取得する', () => {
    const service: ArtService = TestBed.get(ArtService);
    let value = 'initialize';
    const res: Observable<any> = service.getArt()
    res.subscribe(
      resp => {
        const resposne: any = resp;
        value = resposne.data;
      }
    );
    console.log(value);
    expect(res).not.toEqual(null);
  });
});
