import { Component, OnInit } from '@angular/core';
import { InflationService } from './services/inflation.service';

export interface TabItem{
  label:string;
  route:string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{
  title = 'inflation-tracker';

  constructor(private inflationService: InflationService) {} 

  tabs:TabItem[] = [
    {
      label:'line',
      route:'/line',
    },
    {
      label:'bar',
      route:'/bar',
    },
    {
      label:'pie',
      route:'/pie',
    },
    {
      label:'country-filter',
      route:'/country-filter',
    },
    {
      label:'date-filter',
      route:'/date-filter',
    }
    
  ];
 
  
}
