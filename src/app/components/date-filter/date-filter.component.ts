import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Filters } from '../../models/filters.model';
import { InflationService } from '../../services/inflation.service';


const today = new Date();
const month = today.getMonth();
const year = today.getFullYear();

@Component({
  selector: 'app-date-filter',
  templateUrl: './date-filter.component.html',
  styleUrls: ['./date-filter.component.css']
})
export class DateFilterComponent implements OnInit {
  
  dateRangeForm = new FormGroup({
    start: new FormControl(),
    end: new FormControl(),
  });
  constructor(private inflationService: InflationService) { }

  ngOnInit(): void {
    this.inflationService.getInflationRates();

    this.dateRangeForm.valueChanges.subscribe((date)=>{
     if(date.start && date.end){

      const obj = { start:date.start, end:date.end };

      this.fetchAPI(obj)
     }
     
    })
  }

  fetchAPI(filters: Filters): void {
    this.inflationService.getInflationRates(filters);
 }
}
