import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { DashboardService } from 'src/app/dashboard.service';
import { Dashboard } from 'src/app/models/dashboard.model';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
})
export class DialogComponent implements OnInit {
  selectedDashboard: Dashboard = new Dashboard({});

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dashboardService: DashboardService,
    public dialogRef: MatDialogRef<DialogComponent>,
  ) {}

  chartTypes = [
    "LINE CHART",
    "PIE CHART",
    "BAR CHART"
  ];

  ngOnInit(): void {
    if (this.data?.id) {
      this.dashboardService.selectedDashboard$.subscribe(dashboard => {
        if(dashboard) {
          this.selectedDashboard = dashboard as Dashboard;
          this.chartTypes = this.chartTypes.filter(i => !this.selectedDashboard.charts.includes(i))
        }
      })
      this.dashboardService.getDashboard(this.data.id);
    }
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  save(): void {
    if(this.selectedDashboard?.id)
      this.dashboardService.setDashboard({ ...this.selectedDashboard })
    else
      this.dashboardService.addDashboard({... this.selectedDashboard});

    this.dialogRef.close();
  }
}
