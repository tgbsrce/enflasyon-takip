import { Component } from '@angular/core';
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
    this.inflationService.getInflationRates();
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
interface DateParams {
  start: Date;
  end: Date;
}
