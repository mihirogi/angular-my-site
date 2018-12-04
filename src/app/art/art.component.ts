import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-art',
  templateUrl: './art.component.html',
  styleUrls: ['./art.component.css']
})
export class ArtComponent implements OnInit {

  private getArtsEndpoint = 'https://wqlli8vwj9.execute-api.ap-northeast-1.amazonaws.com/dev/arts';
  private arts;

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
    this.http.get(this.getArtsEndpoint, this.httpOptions).subscribe(
      res => {
        console.log(res);
        this.arts = res['message'];
      }
    );
  }
}
