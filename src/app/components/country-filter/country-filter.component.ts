import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { countries } from '../../models/country.model';

@Component({
  selector: 'app-country-filter',
  templateUrl: './country-filter.component.html',
  styleUrls: ['./country-filter.component.css'],
})
export class CountryFilterComponent implements OnInit {
  @Output() ChildEvent = new EventEmitter<any>();
  countries = countries;
  constructor() {}

  ngOnInit(): void {}
  countrySelected(event: any): void {
    this.ChildEvent.emit(event);
  }
}
