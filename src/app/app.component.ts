import { Component, OnInit } from '@angular/core';
import { NgxEchartsModule } from 'ngx-echarts';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InflationService } from './services/inflation.service';
import { countries} from './models/country.model';


const today = new Date();
const month = today.getMonth();
const year = today.getFullYear();


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'inflation-tracker';
 
  countries= countries
  

  dateRangeForm = new FormGroup({
    start: new FormControl(),
    end: new FormControl(),
  });

  constructor(private inflationService: InflationService) {}
  
 
  ngOnInit(): void {
    this.inflationService.getInflationRates();
    this.dateRangeForm.valueChanges.subscribe((date)=>{
     if(date.start && date.end){
      this.fetchAPI("turkey", date.start, date.end)
     }
    })
   
  }

  fetchAPI(country:string,start?:Date,end?:Date): void {
     this.inflationService.getInflationRates(country,start,end);
  }

  countrySelected(event: any) {
    this.fetchAPI(event.value)
  }
  
}
