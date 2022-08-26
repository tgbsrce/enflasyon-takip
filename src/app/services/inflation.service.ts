import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class InflationService {
  private inflationRates = new BehaviorSubject<any>([]);
  inflationRates$ = this.inflationRates.asObservable();

  constructor(private http: HttpClient) { }
  
  getInflationRates() {
    this.http.get('https://www.statbureau.org/get-data-json?country=turkey')
      .subscribe(response => {
        this.inflationRates.next(response);
      })
      
  }
}
