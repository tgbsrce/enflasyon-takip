import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartsComponent } from './charts.component';

const routes: Routes = [
  {
    path: '',
    component: ChartsComponent,
    children: [
      {
        path: 'general',
        loadChildren: () =>
          import('../../components/general/general.module').then(
            (m) => m.GeneralModule
          ),
      },
      {
        path: 'dashboard/:id',
        loadChildren: () =>
          import(
            '../../components/chart-dashboard/chart-dashboard.module'
          ).then((m) => m.ChartDashboardModule),
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChartsRoutingModule {}
