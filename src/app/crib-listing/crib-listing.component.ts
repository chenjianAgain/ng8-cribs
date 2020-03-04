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

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.request();
  }

  onClickMe(event: Event) {
    var query = (event.target as HTMLButtonElement).innerHTML;
    console.log(query);
    console.log(query);
    if (query !== 'Search') {
      this.request(query, 0, 5);
    }
  }

  request(query?: string, page?: number, limit?: number) {
    this.http.get(this.getUrl(query, page, limit)).subscribe(data => this.videos = data['response']['videos']);
  }

  getUrl(query = 'Kaori', page = 1, limit = 1) {
    return `https://api.avgle.com/v1/search/${query}/${page}?limit=${limit}`;
  }
}
