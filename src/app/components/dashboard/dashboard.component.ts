import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DashboardService } from 'src/app/dashboard.service';
import { Dashboard } from 'src/app/models/dashboard.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'charts', 'symbol'];
  dashboards$!: Observable<Array<Dashboard>>;

  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.dashboards$ = this.dashboardService.dashboards$;

    this.dashboardService.getDashboards();
  }
}
