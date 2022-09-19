import { NgModule } from '@angular/core';
import { NgxEchartsModule } from 'ngx-echarts';
import { LineChartComponent } from './line-chart.component';

@NgModule({
  imports: [
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
  ],
  providers: [],
  declarations: [LineChartComponent],
  exports: [LineChartComponent],
})
export class LineChartModule {}
