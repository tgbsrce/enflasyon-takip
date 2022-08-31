import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, filter, repeat } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class InflationService {
  private inflationRates = new BehaviorSubject<any>([]);
  inflationRates$ = this.inflationRates.asObservable();

  constructor(private http: HttpClient) { }
  post: any;
  
  getInflationRates(country="turkey",start= "",end="") {

    this.http.get('https://www.statbureau.org/get-data-json?country='+ country)
      .subscribe(response => {
        this.inflationRates.next(response);
        this.post=response;
        
      
        
      })
      
  }
}
