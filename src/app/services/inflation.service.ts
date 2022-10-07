import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Filters } from '../models/filters.model';
import { InflationData } from '../models/inflation.model';
import { FilterService } from './filter.service';

@Injectable({
  providedIn: 'root',
})
export class InflationService {
  private inflationRates = new BehaviorSubject<InflationData[]>([]);
  inflationRates$ = this.inflationRates.asObservable();

  // Temp solution.
  get filterState() {
    return this.filterService.getFiltersFromState();
  }

  constructor(private http: HttpClient, private filterService: FilterService) {}

  getInflationRates(filters?: Filters): void {
    filters && this.filterService.saveFilters(filters);

    const currentFilters = this.filterService.getFiltersFromState();

    this.http
      .get<InflationData[]>(
        'https://www.statbureau.org/get-data-json?country=' +
        currentFilters.country
      )
      .subscribe((response) => {
        response = response.map((i) => new InflationData(i));

        if (!currentFilters.start || !currentFilters.end) {
          this.inflationRates.next(response);
          return;
        }

        const filterResponse = response.filter((data) => {
          const inflationDate = new Date(data.MonthFormatted);

          if (currentFilters.start && currentFilters.end) {
            return (
              inflationDate >= currentFilters.start &&
              inflationDate <= currentFilters.end
            );
          }

          return false;
        });

        this.inflationRates.next(filterResponse);
      });
  }
}
