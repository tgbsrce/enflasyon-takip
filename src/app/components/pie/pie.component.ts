import { Component, OnInit } from '@angular/core';
import { Filters } from 'src/app/models/filters.model';
import { InflationService } from 'src/app/services/inflation.service';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css'],
})
export class PieComponent implements OnInit {
  constructor(private inflationService: InflationService) {}

  ngOnInit(): void {
    this.inflationService.inflationRates$.subscribe((rates) => {
      console.log('pie component inflationRates triggered!');
    });
  }
  fetchAPI(filters: Filters): void {
    this.inflationService.getInflationRates(filters);
  }
  countrySelected(event: any): void {
    this.fetchAPI({ country: event.value });
  }
}
