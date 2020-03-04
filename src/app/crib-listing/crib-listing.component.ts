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
    // console.log((<HTMLInputElement>event.target).value);
    // console.log((event.target as HTMLButtonElement).innerHTML);
    var keyword = (event.target as HTMLButtonElement).innerHTML;
    console.log(keyword);
    if (keyword !== 'Search') {
      this.request(keyword, 0, 10);
    }
  }

  request(keyword?: string, offset?: number, limit?: number) {
    this.http.get(this.getUrl(keyword, offset, limit)).subscribe(data => this.videos = data['response']['videos']);
  }

  getUrl(keyword = 'Kaori', offset = 1, limit = 1) {
    return `https://api.avgle.com/v1/search/${keyword}/${offset}?limit=${limit}`;
  }
}
