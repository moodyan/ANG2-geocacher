import { geoKey } from './api-keys';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Listing } from './listing.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class ListingService {
  listings: FirebaseListObservable<any[]>;

  constructor(private af: AngularFireDatabase) {
    this.listings = af.list('listings');
  }

  addListing(newListing: Listing) {
    this.listings.push(newListing);
  }

  getListings() {
    return this.listings;
  }

  deleteListing(selectedListing) {
    let foundListing = this.getListingById(selectedListing.$key);
    foundListing.remove();
  }

  getListingById(listingId: string){
    return this.af.object('listings/' + listingId);
  }

}
