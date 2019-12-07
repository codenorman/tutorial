import {Component, Input, OnInit} from '@angular/core';
import {Renter} from './renter';

@Component({
  selector: 'app-renter',
  templateUrl: './renter.component.html',
  styleUrls: ['./renter.component.css']
})
export class RenterComponent implements OnInit {

  @Input() renter: Renter;
  isEditMode = false;

  constructor() {
  }

  ngOnInit() {
  }

  editMode() {
    this.isEditMode = !this.isEditMode;
  }
}
