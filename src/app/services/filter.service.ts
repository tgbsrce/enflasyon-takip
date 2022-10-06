import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Filters } from '../models/filters.model';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  private filters = new BehaviorSubject<Filters>(new Filters({}));
  filters$ = this.filters.asObservable();

  getFilter(): void {
    this.http
      .get<Filters>('https://it-vis.herokuapp.com/filters')
      .subscribe((filters) => {
        this.filters.next(filters);
      });
  }
  setFilter(filters: Filters): void {
    this.http
      .put('https://it-vis.herokuapp.com/filters', filters)
      .subscribe(() => {
        this.filters.next(filters);
      });
  }

  constructor(private http: HttpClient) {}
}
