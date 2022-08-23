import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarComponent } from './bar/bar.component';
import { HomeComponent } from './home/home.component';
import { LineComponent } from './line/line.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PieComponent } from './pie/pie.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'line', component: LineComponent },
  { path: 'bar', component: BarComponent },
  { path:'pie', component:PieComponent},
  { path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

