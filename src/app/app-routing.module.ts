import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarComponent } from './components/bar/bar.component';
import { CountryComponent } from './country/country.component';
import { LineComponent } from './components/line/line.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PieComponent } from './components/pie/pie.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'home', component: AppComponent },
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

