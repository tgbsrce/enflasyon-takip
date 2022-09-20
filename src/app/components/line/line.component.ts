import { Component, OnInit } from '@angular/core';
import { Filters } from 'src/app/models/filters.model';
import { InflationService } from 'src/app/services/inflation.service';

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.css'],
})
export class LineComponent {
  constructor(private inflationService: InflationService) {}

  ngOnInit(): void {
    this.inflationService.inflationRates$.subscribe((rates) => {
      console.log('line component inflationRates triggered!');
    });
  }
  fetchAPI(filters: Filters): void {
    this.inflationService.getInflationRates(filters);
  }
  countrySelected(event: any): void {
    this.fetchAPI({ country: event.value });
  }
}
