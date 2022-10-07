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

  getDashboard(id: string): void {
    this.http
      .get<Dashboard>('https://it-vis.herokuapp.com/dashboard/' + id)
      .subscribe((dashboard) => {
        this.selectedDashboard.next(new Dashboard(dashboard));
      });
  }

  addDashboard(newDashboard: Dashboard): void {
    this.http.post<Dashboard>('https://it-vis.herokuapp.com/dashboard', newDashboard)
    .subscribe((dashboard) => {
      const existingDashboard = this.dashboards.getValue();

      this.dashboards.next([...existingDashboard, dashboard]);
    })
  }

  setDashboard(dashboardToUpdate: Dashboard): void {
    this.http
      .put<Dashboard>('https://it-vis.herokuapp.com/dashboard/' + dashboardToUpdate.id, dashboardToUpdate)
      .subscribe((dashboard) => {
        const dashboardsFromState = this.dashboards.getValue();

        const updatedDashboard = dashboardsFromState.find(i => i.id === dashboard.id);

        if (updatedDashboard) {
          updatedDashboard.name = dashboard.name;
          updatedDashboard.charts = dashboard.charts;
        }

        this.dashboards.next(dashboardsFromState);

        this.utilService.notify('İşlem başarılı :)');
      });
  }

  deleteDashboard(id: string): void {
    this.http.delete<void>('https://it-vis.herokuapp.com/dashboard/' + id)
    .subscribe(() => {
      const existingDashboard = this.dashboards.getValue();
      const afterDeletion = existingDashboard.filter(i => i.id !== id);
      
      this.dashboards.next(afterDeletion);

      this.utilService.notify("Dashboard silindi. :)");
    })
  }
}
