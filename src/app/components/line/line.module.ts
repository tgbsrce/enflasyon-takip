import { NgModule } from '@angular/core';
import { NgxEchartsModule } from 'ngx-echarts';
import { CountryFilterModule } from '../country-filter/country-filter.module';
import { DateFilterModule } from '../date-filter/date-filter.module';
import { LineChartComponent } from '../line-chart/line-chart.component';
import { LineComponent } from './line.component';
import { LineRoutingModule } from './line.routing';

@NgModule({
  imports: [
    LineRoutingModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
    CountryFilterModule,
    DateFilterModule,
  ],
  providers: [],
  declarations: [LineComponent, LineChartComponent],
})
export class LineModule {}
