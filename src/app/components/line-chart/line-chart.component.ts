import { Component, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';
import { InflationService } from '../../services/inflation.service';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css'],
})
export class LineChartComponent implements OnInit {
  lineChartOption: EChartsOption = {
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
    },
    yAxis: {
      type: 'value',
    },

    series: [
      {
        data: [820, 932, 901, 934, 1290, 1430, 1550, 1200, 1650.145, 1680.189],
        type: 'line',
        areaStyle: {},
      },
    ],
  };
  constructor() {}

  ngOnInit(): void {}
}
