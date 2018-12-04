import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Message } from '../message';


@Injectable({
  providedIn: 'root'
})
export class ArtService {

  private getArtsEndpoint = 'https://wqlli8vwj9.execute-api.ap-northeast-1.amazonaws.com/dev/arts';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  constructor(private http: HttpClient) {
  }

  getArt(): Observable<Message> {
    return this.http.get<Message>(this.getArtsEndpoint, this.httpOptions);
  }
}
