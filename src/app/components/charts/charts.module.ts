import { NgModule } from '@angular/core';
import { BarChartModule } from '../bar-chart/bar-chart.module';
import { CountryFilterModule } from '../country-filter/country-filter.module';
import { DateFilterModule } from '../date-filter/date-filter.module';
import { LineChartModule } from '../line-chart/line-chart.module';
import { PieChartModule } from '../pie-chart/pie-chart.module';
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
  ],
  providers: [],
  declarations: [ChartsComponent],
  exports: [ChartsComponent],
})
export class ChartsModule {}
