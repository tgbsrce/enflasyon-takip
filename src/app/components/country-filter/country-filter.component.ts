import { Component, OnInit } from '@angular/core';
import { countries } from '../../models/country.model';
import { Filters } from '../../models/filters.model';
import { InflationService } from '../../services/inflation.service';

@Component({
  selector: 'app-country-filter',
  templateUrl: './country-filter.component.html',
  styleUrls: ['./country-filter.component.css']
})
export class CountryFilterComponent implements OnInit {

  countries= countries
  constructor(private inflationService: InflationService) { }

  ngOnInit(): void {
  }

  fetchAPI(filters: Filters): void {
    this.inflationService.getInflationRates(filters);
 }
  countrySelected(event: any) {
    this.fetchAPI({ country: event.value });
  }
}
