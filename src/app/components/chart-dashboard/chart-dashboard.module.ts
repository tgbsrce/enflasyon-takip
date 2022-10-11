import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BarModule } from '../bar/bar.module';
import { LineModule } from '../line/line.module';
import { PieModule } from '../pie/pie.module';
import { ChartDashboardComponent } from './chart-dashboard.component';
import { ChartDashboardRoutingModule } from './chart-dashboard.routing';

@NgModule({
  imports: [
    ChartDashboardRoutingModule,
    CommonModule,
    LineModule,
    BarModule,
    PieModule,
  ],
  providers: [],
  declarations: [ChartDashboardComponent],
  exports: [ChartDashboardComponent],
})
export class ChartDashboardModule {}
