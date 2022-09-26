import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { EChartsOption } from 'echarts';
import { LineData } from 'src/app/models/inflation.model';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css'],
})
export class LineChartComponent implements OnInit, OnChanges {
  @Input() newData!: LineData;
  lineChartOption: EChartsOption = {
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: this.newData?.axisData || [],
    },
    yAxis: {
      type: 'value',
    },

    series: [
      {
        data: this.newData?.data || [],
        type: 'line',
        areaStyle: {},
      },
    ],
  };
  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {
    this.newData = changes['newData']?.currentValue;
  }

  ngOnInit(): void {
    console.log(this.newData);
  }
}
