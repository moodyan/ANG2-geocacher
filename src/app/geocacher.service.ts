import { geoKey } from './api-keys';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class GeocacherService {

  constructor(private http: Http) { }

  getListingsByLatLong(latitude: string, longitude: string) {
  return this.http.get("https://maps.googleapis.com/maps/api/geocode/json?latlng=" +latitude+","+longitude+"&key="+geoKey)
  }
}
