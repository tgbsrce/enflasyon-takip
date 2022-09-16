import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
{
  path:'bar',
  loadChildren:() =>import('./components/bar/bar.module').then((m) =>m.BarModule)

},
{
  path:'country-filter',
  loadChildren:() =>import('./components/country-filter/country-filter.module').then((m) =>m.CountryFilterModule)

},
{
  path:'date-filter',
  loadChildren:() =>import('./components/date-filter/date-filter.module').then((m) =>m.DateFilterModule)

},
{
  path:'line',
  loadChildren:() =>import('./components/line/line.module').then((m) =>m.LineModule)

},
{
  path:'pie',
  loadChildren:()=>import('./components/pie/pie.module').then((m) =>m.PieModule)

},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

