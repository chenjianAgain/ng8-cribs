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
    this.http.get('data/videos.json').subscribe((data: Array<any>) => this.videos = data);
  }

}
