import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Art } from '../art';


@Injectable({
  providedIn: 'root'
})
export class ArtService {

  private url = 'https://scrapbox.io/api/pages/art-mihirogi/';

  constructor(private http: HttpClient) {
  }

  getArt(): Observable<any[]> {
    return this.http.get<any[]>(this.url);
  }
}
