import { Injectable } from '@angular/core';
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

}
