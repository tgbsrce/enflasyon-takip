import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UtilService } from './util.service';
import { Dashboard } from './models/dashboard.model';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  private dashboards = new BehaviorSubject<Array<Dashboard>>([]);
  private selectedDashboard = new BehaviorSubject<Dashboard | null>(null);
  dashboards$ = this.dashboards.asObservable();
  selectedDashboard$ = this.selectedDashboard.asObservable();

  constructor(private http: HttpClient, private utilService: UtilService) {}

  getDashboards(): void {
    this.http
      .get<Array<Dashboard>>('https://it-vis.herokuapp.com/dashboard')
      .subscribe((dashboards) => {
        this.dashboards.next(dashboards);
      });
  }
  setDashboard(dashboard: Dashboard): void {
    this.http
      .put('https://it-vis.herokuapp.com/dashboard', dashboard)
      .subscribe(() => {
        this.dashboards.next(dashboard);
        this.utilService.notify('İşlem başarılı :)');
      });
  }
}
