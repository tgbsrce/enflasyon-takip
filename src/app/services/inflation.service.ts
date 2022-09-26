import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Filters } from '../models/filters.model';
import { InflationData } from '../models/inflation.model';

@Injectable({
  providedIn: 'root',
})
export class InflationService {
  private inflationRates = new BehaviorSubject<InflationData[]>([]);
  inflationRates$ = this.inflationRates.asObservable();

  filterState = new Filters({});

  constructor(private http: HttpClient) {}

  getInflationRates(filters?: Filters): void {
    console.log(filters);
    if (filters) {
      this.filterState = { ...this.filterState, ...filters };
    }

    this.http
      .get<InflationData[]>(
        'https://www.statbureau.org/get-data-json?country=' +
          this.filterState.country
      )
      .subscribe((response) => {
        response = response.map((i) => new InflationData(i));

        if (!this.filterState.start || !this.filterState.end) {
          this.inflationRates.next(response);
          return;
        }

        const filterResponse = response.filter((data) => {
          const inflationDate = new Date(data.MonthFormatted);

          if (this.filterState.start && this.filterState.end) {
            return (
              inflationDate >= this.filterState.start &&
              inflationDate <= this.filterState.end
            );
          }

          return false;
        });

        this.inflationRates.next(filterResponse);
        console.log(filterResponse.length);
      });
  }
}
