import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-crib-listing',
  templateUrl: './crib-listing.component.html',
  styleUrls: ['./crib-listing.component.css']
})
export class CribListingComponent implements OnInit {

  // cribs: Array<any> = cribs;
  videos: Array<any>;
  videosUrl = 'https://api.avgle.com/v1/search/%E5%89%8D%E7%94%B0/0?limit=10';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get(this.videosUrl).subscribe(data => this.videos = data['response']['videos']);
    // this.http.get(this.videosUrl).subscribe((data: Object) => this.videos = data.response.videos);
  }

}
