import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarComponent } from './components/bar/bar.component';
import { CountryComponent } from './country/country.component';
import { HomeComponent } from './components/home/home.component';
import { LineComponent } from './components/line/line.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PieComponent } from './components/pie/pie.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'line', component: LineComponent },
  { path: 'bar', component: BarComponent },
  { path:'pie', component:PieComponent},
  { path: '**', component: NotFoundComponent},
  {path:'country', component:CountryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

