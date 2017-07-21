import { geoKey } from './api-keys';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Listing } from './listing.model';
import { ListingService } from './listing.service';

@Injectable()
export class GeocacherService {

  constructor(private http: Http, private listingService: ListingService) { }

  getListingsByLatLong(latitude: string, longitude: string) {
    return this.http.get("https://maps.googleapis.com/maps/api/geocode/json?latlng=" +latitude+","+longitude+"&key="+geoKey)
  }

  getLatLongByLocation(street: string, city: string, state: string) {
    return this.http.get("https://maps.googleapis.com/maps/api/geocode/json?address=" + street + city + state + "&key="+geoKey)
  }

  saveListing(address: string, latitude: string, longitude: string) {
  return this.http.get("https://maps.googleapis.com/maps/api/geocode/json?latlng=" +latitude+","+longitude+"&key="+geoKey)
    .subscribe(response => {
      let foundListing = new Listing(address, latitude, longitude);
      this.listingService.addListing(foundListing);
    });
  }

}
