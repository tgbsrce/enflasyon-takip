import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Dashboard } from 'src/app/models/dashboard.model';
import { DashboardService } from 'src/app/services/dashboard.service';
import { InflationService } from 'src/app/services/inflation.service';

@Component({
  selector: 'app-chart-dashboard',
  templateUrl: './chart-dashboard.component.html',
  styleUrls: ['./chart-dashboard.component.css'],
})
export class ChartDashboardComponent implements OnInit {
  selectedDashboard$!: Observable<Dashboard | null>;

  constructor(
    private dashboardService: DashboardService,
    private activeRouter: ActivatedRoute,
    private inflationService: InflationService
  ) {
    this.selectedDashboard$ = this.dashboardService.selectedDashboard$;
  }
  ngOnInit(): void {
    this.activeRouter.params.subscribe((params) => {
      this.dashboardService.getDashboard(params['id']);
    });
    this.inflationService.getInflationRates();
  }
}
