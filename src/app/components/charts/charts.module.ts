import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { BarChartModule } from '../bar-chart/bar-chart.module';
import { BarModule } from '../bar/bar.module';
import { CountryFilterModule } from '../country-filter/country-filter.module';
import { DateFilterModule } from '../date-filter/date-filter.module';
import { GeneralComponent } from '../general/general.component';
import { LineChartModule } from '../line-chart/line-chart.module';
import { LineModule } from '../line/line.module';
import { PieChartModule } from '../pie-chart/pie-chart.module';
import { PieModule } from '../pie/pie.module';
import { ChartsComponent } from './charts.component';
import { ChartsRoutingModule } from './charts.routing';

@NgModule({
  imports: [
    ChartsRoutingModule,
    CountryFilterModule,
    DateFilterModule,
    BarChartModule,
    LineChartModule,
    PieChartModule,
    CountryFilterModule,
    DateFilterModule,
    LineModule,
    PieModule,
    BarModule,
    MatTabsModule,
  ],
  providers: [],
  declarations: [ChartsComponent, GeneralComponent],
  // to do general component modul olsun
  exports: [ChartsComponent],
})
export class ChartsModule {}
