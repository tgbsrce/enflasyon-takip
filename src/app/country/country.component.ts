import { Component, OnInit } from '@angular/core';
import { InflationService } from '../services/inflation.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  posts: any | undefined;

  constructor(private inflationService: InflationService) {}

  ngOnInit(): void {
    this.inflationService.inflationRates$.subscribe(rates => {
      console.log("country component inflationRates triggered!");
    })
  }

}
