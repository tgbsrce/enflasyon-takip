import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { InflationData } from '../models/inflation.model';


@Injectable({
  providedIn: 'root'
})
export class InflationService {
  private inflationRates = new BehaviorSubject<InflationData[]>([]);
  inflationRates$ = this.inflationRates.asObservable();

  constructor(private http: HttpClient) { }
  
  getInflationRates(country="turkey", start?: Date, end?: Date): void {

    this.http.get<InflationData[]>('https://www.statbureau.org/get-data-json?country='+ country)
      .subscribe(response => {

        if(!start || !end) {
          this.inflationRates.next(response);
          return;
        }
        
        const filterResponse = response.filter((data) => {
            const inflationDate = new Date(data.MonthFormatted);
  
            return inflationDate >= start && inflationDate <= end
          })
  
        this.inflationRates.next(filterResponse);
      })
      
  }
}
