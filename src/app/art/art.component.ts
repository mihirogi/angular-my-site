import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-art',
  templateUrl: './art.component.html',
  styleUrls: ['./art.component.css']
})
export class ArtComponent implements OnInit {

  private url = 'https://dozhzq3im0.execute-api.ap-northeast-1.amazonaws.com/dev/arts';
  private response;

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.getArt();
  }

  getArt() {
    this.http.get(this.url, this.httpOptions).subscribe(
      res => {
        console.log('response:');
        console.log(res);
      }
    );
  }
}
