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
    constructor(private geocacherService: GeocacherService) { }

    getListingsByLatLong(latitude: string, longitude: string) {
      this.geocacherService.getListingsByLatLong(latitude, longitude).subscribe(response =>{

        this.listings = response.json();
        console.log(this.listings);
      
    });
  }

  ngOnInit() {
  }
}
