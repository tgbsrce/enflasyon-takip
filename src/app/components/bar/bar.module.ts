import { NgModule } from '@angular/core';
import { NgxEchartsModule } from 'ngx-echarts';
import { BarChartComponent } from '../bar-chart/bar-chart.component';
import { CountryFilterModule } from '../country-filter/country-filter.module';
import { DateFilterModule } from '../date-filter/date-filter.module';
import { BarComponent } from './bar.component';
import { BarRoutingModule } from './bar.routing';

@NgModule({
  imports: [
    BarRoutingModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
    CountryFilterModule,
    DateFilterModule,
  ],
  providers: [],
  declarations: [BarComponent, BarChartComponent],
})
export class BarModule {}
