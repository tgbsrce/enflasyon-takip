import { Component, OnInit } from '@angular/core';
import { NgxEchartsModule } from 'ngx-echarts';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InflationService } from './services/inflation.service';
import { countries} from './models/country.model';
import { filters } from './models/filters.model';


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
    this.inflationService.getInflationRates(filters);
    this.dateRangeForm.valueChanges.subscribe((date)=>{
     if(date.start && date.end){
      
      this.fetchAPI(filters)
     }
     
    })
   
  }

  fetchAPI(filters: filters): void {
     this.inflationService.getInflationRates(filters);
  }

  countrySelected(event: any) {
    this.fetchAPI(event.value)
  }
  
}
