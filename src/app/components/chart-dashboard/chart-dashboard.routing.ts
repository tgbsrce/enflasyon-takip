import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartDashboardComponent } from './chart-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: ChartDashboardComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChartDashboardRoutingModule {}
