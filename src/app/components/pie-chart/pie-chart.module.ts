import { NgModule } from '@angular/core';
import { NgxEchartsModule } from 'ngx-echarts';
import { PieChartComponent } from './pie-chart.component';

@NgModule({
  imports: [
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
  ],
  providers: [],
  declarations: [PieChartComponent],
  exports: [PieChartComponent],
})
export class PieChartModule {}
