import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'bar',
    loadChildren: () =>
      import('./components/bar/bar.module').then((m) => m.BarModule),
  },
  {
    path: 'line',
    loadChildren: () =>
      import('./components/line/line.module').then((m) => m.LineModule),
  },
  {
    path: 'pie',
    loadChildren: () =>
      import('./components/pie/pie.module').then((m) => m.PieModule),
  },
  {
    path: 'charts',
    loadChildren: () =>
      import('./components/charts/charts.module').then((m) => m.ChartsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
