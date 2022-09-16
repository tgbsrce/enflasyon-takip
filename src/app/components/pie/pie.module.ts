import { NgModule } from '@angular/core';
import { NgxEchartsModule } from 'ngx-echarts';
import { CountryFilterModule } from '../country-filter/country-filter.module';
import { DateFilterComponent } from '../date-filter/date-filter.component';
import { DateFilterModule } from '../date-filter/date-filter.module';
import { PieChartComponent } from '../pie-chart/pie-chart.component';
import { PieComponent } from './pie.component';
import { PieRoutingModule } from './pie.routing';

@NgModule({
  imports: [
    PieRoutingModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
    CountryFilterModule,
    DateFilterModule,
  ],
  providers: [],
  declarations: [PieChartComponent, PieComponent],
})
export class PieModule {}
