import { Component, OnInit } from '@angular/core';
import { DateParams, Filters } from 'src/app/models/filters.model';
import { FilterService } from 'src/app/services/filter.service';

@Component({
  selector: 'app-filter-settings',
  templateUrl: './filter-settings.component.html',
  styleUrls: ['./filter-settings.component.css'],
})
export class FilterSettingsComponent implements OnInit {
  filters: Filters = new Filters({});
  constructor(private filterService: FilterService) {}
  ngOnInit(): void {
    this.filterService.getFilter();
    this.filterService.filters$.subscribe((filters) => {
      this.filters = filters;
    });
  }
  onSubmit(): void {
    this.filterService.setFilter(this.filters);
  }
  countrySelected(country: string): void {
    this.filters.country = country;
  }
  dateSelected(date: DateParams): void {
    this.filters.start = date.start;
    this.filters.end = date.end;
  }
}
