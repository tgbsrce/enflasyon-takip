import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Filters } from '../models/filters.model';
import { AuthService } from '../auth/auth.service';
import { map } from 'rxjs';
import { UtilService } from '../util.service';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  private filters = new BehaviorSubject<Filters>(new Filters({}));
  filters$ = this.filters.asObservable();

  constructor(private http: HttpClient, private utilService: UtilService) {
    this.getFilter();
  }

  getFilter(): void {
    this.http
      .get<Filters>('https://it-vis.herokuapp.com/filters')
      .pipe(
        map((filters) => {
          if (filters.start) filters.start = new Date(filters.start);
          if (filters.end) filters.end = new Date(filters.end);
          return filters;
        })
      )
      .subscribe((filters) => {
        this.filters.next(filters);
      });
  }
  setFilter(filters: Filters): void {
    this.http
      .put('https://it-vis.herokuapp.com/filters', filters)
      .subscribe(() => {
        this.filters.next(filters);
        this.utilService.notify('İşlem başarılı :)');
      });
  }

  getFiltersFromState() : Filters {
    return this.filters.getValue();
  }

  saveFilters(filters: Filters): void {
    const currentFilters = this.filters.getValue();

    this.filters.next({ ...currentFilters, ...filters });
  }
}
