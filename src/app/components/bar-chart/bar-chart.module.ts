import { NgModule } from '@angular/core';
import { NgxEchartsModule } from 'ngx-echarts';
import { BarChartComponent } from './bar-chart.component';

@NgModule({
  imports: [
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
  ],
  providers: [],
  declarations: [BarChartComponent],
  exports: [BarChartComponent],
})
export class BarChartModule {}
