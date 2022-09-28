import { Component, OnInit } from '@angular/core';
import { DateParams, Filters } from 'src/app/models/filters.model';
import { PieData } from 'src/app/models/inflation.model';
import { InflationService } from 'src/app/services/inflation.service';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css'],
})
export class PieComponent implements OnInit {
  newPieData: Array<PieData> = [];
  constructor(private inflationService: InflationService) {}

  ngOnInit(): void {
    this.inflationService.getInflationRates();
    this.inflationService.inflationRates$.subscribe((rates) => {
      for (var i = 0; i < rates.length; i++) {
        this.newPieData.push({
          value: rates[i].InflationRateFormatted,
          name: rates[i].MonthFormatted,
        });
      }
    });
  }
  fetchAPI(filters: Filters): void {
    this.inflationService.getInflationRates(filters);
  }
  countrySelected(event: string): void {
    this.fetchAPI({ country: event });
  }
  dateSelected(event: DateParams): void {
    this.fetchAPI(event);
  }
}
