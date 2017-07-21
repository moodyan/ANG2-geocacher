import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { GeocacherService } from '../geocacher.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css'],
  providers: [ GeocacherService ]
})

export class SearchFormComponent implements OnInit {
  listings: any[]=null;
  nearestListing = null;
  latitude = null;
  longitude = null;
  latLongResults: boolean = false;
  cacheResults: boolean = false;
  allCacheResults: boolean = false;

  constructor(private geocacherService: GeocacherService) { }

  getLatLongByLocation(street: string, city: string, state: string) {
    this.geocacherService.getLatLongByLocation(street, city, state).subscribe(response =>{
      this.latitude = response.json().results[0].geometry.location.lat;
      this.longitude = response.json().results[0].geometry.location.lng;
    });
    this.latLongResults = true;
  }

  getListingsByLatLong(latitude: string, longitude: string) {
    this.geocacherService.getListingsByLatLong(latitude, longitude).subscribe(response =>{
      this.nearestListing = response.json().results[0];
    });
    this.cacheResults = true;
  }

  getAllListingsByLatLong(latitude: string, longitude: string) {
    this.geocacherService.getListingsByLatLong(latitude, longitude).subscribe(response =>{
      this.listings = response.json().results;
      console.log(response.json().results);
    });
    this.allCacheResults = true;
  }

  ngOnInit() {
  }
}
