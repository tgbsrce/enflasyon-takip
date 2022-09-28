import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { EChartsOption } from 'echarts';
import { LineBarData } from 'src/app/models/inflation.model';
import { createBarChartOptions } from 'src/app/utils/chartOptions';
@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css'],
})
export class BarChartComponent implements OnInit, OnChanges {
  @Input() newData!: LineBarData;
  barChartOption: EChartsOption = {
    // xAxis: {
    //   type: 'category',
    //   data: this.newData?.axisData || [],
    // },
    // yAxis: {
    //   type: 'value',
    // },
    // series: [
    //   {
    //     data: this.newData?.data || [],
    //     type: 'bar',
    //   },
    // ],
  };
  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['newData']?.currentValue) {
      this.barChartOption = createBarChartOptions(
        this.newData.axisData,
        this.newData.data
      );
    }
  }

  ngOnInit(): void {
    console.log(this.newData);
  }
}
