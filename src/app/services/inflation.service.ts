import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { filters } from '../models/filter.model';
import { InflationData } from '../models/inflation.model';


@Injectable({
  providedIn: 'root'
})
export class InflationService {
  private inflationRates = new BehaviorSubject<InflationData[]>([]);
  inflationRates$ = this.inflationRates.asObservable();
  

  constructor(private http: HttpClient) { }
  
  getInflationRates(Filter:any): void {

    this.http.get<InflationData[]>('https://www.statbureau.org/get-data-json?country=' + filters.country)
      .subscribe(response => {

        if(!filters.start || !filters.end) {
          this.inflationRates.next(response);
          return;
          
        }
        
        const filterResponse = response.filter((data) => {
            const inflationDate = new Date(data.MonthFormatted);
  
            return inflationDate >= Filter.start && inflationDate <= filters.end
            
          })
  
        this.inflationRates.next(filterResponse);
        
      })
      
  }
}
