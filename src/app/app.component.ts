import { Component, OnInit } from '@angular/core';
import { InflationService } from './services/inflation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'inflation-tracker';

  constructor(private inflationService: InflationService) {}
}
