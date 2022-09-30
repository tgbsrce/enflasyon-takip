import { Component, OnInit } from '@angular/core';
import { DateParams, Filters } from 'src/app/models/filters.model';
import { LineBarData } from 'src/app/models/inflation.model';
import { InflationService } from 'src/app/services/inflation.service';
@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css'],
})
export class BarComponent implements OnInit {
  newData: LineBarData = new LineBarData();
  filter: Filters = {};
  constructor(private inflationService: InflationService) {}

  ngOnInit(): void {
    this.inflationService.getInflationRates();
    this.filter = this.getFilters();
    this.inflationService.inflationRates$.subscribe((rates) => {
      this.newData = {
        axisData: rates.map((i) => i.MonthFormatted),
        data: rates.map((i) => i.InflationRateFormatted),
      };
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
  getFilters(): Filters {
    return this.inflationService.filterState;
  }
}
