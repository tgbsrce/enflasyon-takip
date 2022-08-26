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
  dateRangeForm!: FormGroup;

  campaignOne = new FormGroup({
    start: new FormControl(new Date(year, month)),
    end: new FormControl(new Date(year, month)),
  });

  constructor(private inflationService: InflationService ,private formBuilder: FormBuilder) {}
  
  range = new FormGroup({
    fromDate: new FormControl('', Validators.required),
    toDate: new FormControl('', Validators.required)
  });
  ngOnInit(): void {
    this.inflationService.getInflationRates();
    this.dateRangeForm = this.formBuilder.group({
      fromDate: new FormControl('', Validators.required),
      toDate: new FormControl('', Validators.required)
    });
  }
  onFormSubmit() {
    console.log('Is Form Invalid', this.dateRangeForm.invalid);
    console.log(this.dateRangeForm.value);
    
  }

  fetchAPI(): void {
    this.inflationService.getInflationRates();
  }

  countrySelected(event: any) {
    console.log(event.value)
    this.fetchAPI()
  }
  
}
