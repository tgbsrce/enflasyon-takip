import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { filters } from '../models/filters.model';
import { InflationData } from '../models/inflation.model';


@Injectable({
  providedIn: 'root'
})
export class InflationService {
  private inflationRates = new BehaviorSubject<InflationData[]>([]);
  inflationRates$ = this.inflationRates.asObservable();
   
  
  filter={
    country:filters.country,
    start:filters.start,
    end:filters.end
  }

  constructor(private http: HttpClient) { }
  
  getInflationRates(filters:filters): void {

    this.http.get<InflationData[]>('https://www.statbureau.org/get-data-json?country=' +this.filter.country)
      .subscribe(response => {

        if(!this.filter.start || !this.filter.end) {
          this.inflationRates.next(response);
          return;
          
        }
        
        const filterResponse = response.filter((data) => {
            const inflationDate = new Date(data.MonthFormatted);
  
            return inflationDate >= this.filter.start && inflationDate <= this.filter.end
            
          })
  
        this.inflationRates.next(filterResponse);
        
      })
      
  }
}
