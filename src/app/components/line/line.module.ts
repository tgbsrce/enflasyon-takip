import { NgModule } from '@angular/core';
import { NgxEchartsModule } from 'ngx-echarts';
import { CountryFilterModule } from '../country-filter/country-filter.module';
import { DateFilterModule } from '../date-filter/date-filter.module';
import { LineChartModule } from '../line-chart/line-chart.module';
import { LineComponent } from './line.component';
import { LineRoutingModule } from './line.routing';

@NgModule({
  imports: [
    LineRoutingModule,
    CountryFilterModule,
    DateFilterModule,
    LineChartModule,
  ],
  providers: [],
  declarations: [LineComponent],
  exports: [LineComponent],
})
export class LineModule {}
