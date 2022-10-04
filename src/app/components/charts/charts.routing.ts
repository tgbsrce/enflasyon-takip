import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneralComponent } from '../general/general.component';
import { ChartsComponent } from './charts.component';

const routes: Routes = [
  {
    path: '',
    component: ChartsComponent,
    children: [
      {
        path: 'bar',
        loadChildren: () =>
          import('../../components/bar/bar.module').then((m) => m.BarModule),
      },
      {
        path: 'line',
        loadChildren: () =>
          import('../../components/line/line.module').then((m) => m.LineModule),
      },
      {
        path: 'pie',
        loadChildren: () =>
          import('../../components/pie/pie.module').then((m) => m.PieModule),
      },
      {
        path: 'general',
        component: GeneralComponent,
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChartsRoutingModule {}
