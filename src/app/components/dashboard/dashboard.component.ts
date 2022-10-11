import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { DashboardService } from 'src/app/services/dashboard.service';
import { DialogComponent } from 'src/app/components/dialog/dialog.component';
import { Dashboard } from 'src/app/models/dashboard.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'charts', 'symbol'];
  dashboards$!: Observable<Array<Dashboard>>;

  constructor(
    private dashboardService: DashboardService,
    private matDialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.dashboards$ = this.dashboardService.dashboards$;

    this.dashboardService.getDashboards();
  }
  remove(id: string): void {
    this.dashboardService.deleteDashboard(id);
  }
  openDialog(id: string) {
    this.matDialog.open(DialogComponent, {
      data: {
        id,
      },
    });
  }
  addDashboard(): void {
    this.matDialog.open(DialogComponent);
  }
}
