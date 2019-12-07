import { Component, OnInit} from '@angular/core';
import {Renter} from './renter/renter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'lease-mgmt';
  count: number = 0;
  renters: [Renter] = [{
    lastname: 'Chirgwin',
    firstname: 'Brian'
  },
   {
    lastname: 'Smith',
    firstname: 'Bob',
     middlename: 'pasta'
  },
    {
      lastname: 'Choco',
      firstname: 'Bob',
      middlename: 'pasta'
    }
  ];

  displayRenters = [];

  ngOnInit() {
    setInterval(() => {
      this.count += 1;
    } , 1000);

    this.displayRenters = this.renters
      .sort( (a, b) => {
        if (a.lastname <= b.lastname) {
          return -1
        } else {
          return 1
        }
      } );
    ;
  }

  filterRenters(e) {
    this.displayRenters = this.renters.filter( renter => renter.lastname.startsWith( e.target.value))
  }

  addRenter() {
    this.renters = [...this.renters, {lastname: 'Doe', firstname: 'John'}]
    this.displayRenters = this.renters;
  }
}
