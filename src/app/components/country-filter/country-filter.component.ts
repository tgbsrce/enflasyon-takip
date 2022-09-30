import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { countries } from '../../models/country.model';

@Component({
  selector: 'app-country-filter',
  templateUrl: './country-filter.component.html',
  styleUrls: ['./country-filter.component.css'],
})
export class CountryFilterComponent implements OnInit {
  @Output() ChildEvent = new EventEmitter<string>();
  @Input() value: string | undefined;
  countries = countries;
  constructor() {}
  ngOnInit(): void {}
  countrySelected(event: MatSelectChange): void {
    this.ChildEvent.emit(event.value);
  }
}
