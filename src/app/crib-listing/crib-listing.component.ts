import { Component, OnInit } from '@angular/core';
import { cribs } from '../data/cribs';
import { videos } from '../data/videos';

@Component({
  selector: 'app-crib-listing',
  templateUrl: './crib-listing.component.html',
  styleUrls: ['./crib-listing.component.css']
})
export class CribListingComponent implements OnInit {

  // cribs: Array<any> = cribs;
  videos: Array<any> = videos;

  constructor() { }

  ngOnInit(): void {
  }

}
