import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, filter, repeat } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class InflationService {
  variables =[
   
  ]
  private inflationRates = new BehaviorSubject<any>([]);
  inflationRates$ = this.inflationRates.asObservable();

  constructor(private http: HttpClient) { }
  post: any | undefined;
  date:any;
  
  getInflationRates(country="turkey",start="12.02.1998",end=`${this.date.end}`) {

    this.http.get('https://www.statbureau.org/get-data-json?country='+ country)
      .subscribe(response => {
        this.post=response;
        // for (var i = 0; i < this.post.length; i++){
        //   this.date=new Date(this.post[i].MonthFormatted);
          
        //   if(this.date>= start && this.date<=end){
        //      this.inflationRates.next(response);
        //   }
           
        // } 
        const filterResponse=response.filter((data)=>{

        })
       
      })
      
  }
}
