import { Component, OnInit } from '@angular/core';
import { DateParams, Filters } from 'src/app/models/filters.model';
import { LineBarData, PieData } from 'src/app/models/inflation.model';
import { InflationService } from 'src/app/services/inflation.service';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css'],
})
export class GeneralComponent implements OnInit {
  newData: LineBarData = new LineBarData();
  newPieData: Array<PieData> = [];
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
  getFilters(): Filters {
    return this.inflationService.filterState;
  }
}
