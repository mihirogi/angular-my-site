import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ArtService } from './service/art.service';
import { Message } from './message';

@Component({
  selector: 'app-art',
  templateUrl: './art.component.html',
  styleUrls: ['./art.component.css']
})
export class ArtComponent implements OnInit {
  arts: Message;

  constructor(private http: HttpClient, private artService: ArtService) {}

  ngOnInit() {
    this.artService.getArt().subscribe(response => {
      this.arts = response;
    });
  }
}
