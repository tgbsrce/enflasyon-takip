import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { DashboardService } from 'src/app/services/dashboard.service';
import { Dashboard } from 'src/app/models/dashboard.model';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css'],
})
export class ChartsComponent implements OnInit {
  isLoggedIn$!: Observable<boolean>;
  dashboards$!: Observable<Dashboard[]>;
  constructor(
    private authService: AuthService,
    private dashboard: DashboardService
  ) {
    this.isLoggedIn$ = this.authService.isLoggedIn;
    this.dashboards$ = this.dashboard.dashboards$;
  }
  ngOnInit(): void {
    this.dashboard.getDashboards();
  }
  exit(): void {
    this.authService.logout();
  }
}
