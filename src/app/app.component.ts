import { Component, OnInit } from '@angular/core';
import { NgxEchartsModule } from 'ngx-echarts';
import {FormGroup, FormControl} from '@angular/forms';
import { InflationService } from './services/inflation.service';

const today = new Date();
const month = today.getMonth();
const year = today.getFullYear();


interface Country {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'inflation-tracker';
  countries: Country[] = [
    {value: 'Canada', viewValue: 'Canada'},
    {value: 'Brazil', viewValue: 'Brazil'},
    {value: 'Turkey', viewValue: 'Turkey'},
  ];
  campaignOne = new FormGroup({
    start: new FormControl(new Date(year, month, 13)),
    end: new FormControl(new Date(year, month, 16)),
  });

  constructor(private inflationService: InflationService) {}
 
  ngOnInit(): void {
    this.inflationService.getInflationRates();
  }

  fetchAPI(): void {
    this.inflationService.getInflationRates();
  }

  countrySelected(event: any) {
    console.log(event)
  }
}
