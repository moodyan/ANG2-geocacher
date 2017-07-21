import { Component, OnInit } from '@angular/core';
import { ListingService } from '../listing.service';
import { Listing } from '../listing.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-user-saved-listings',
  templateUrl: './user-saved-listings.component.html',
  styleUrls: ['./user-saved-listings.component.css'],
  providers: [ ListingService ]
})
export class UserSavedListingsComponent implements OnInit {

  constructor(private listingService: ListingService) { }
  savedListings: FirebaseListObservable <any[]> = null;

  ngOnInit() {
    this.savedListings = this.listingService.getListings();
  }

}
