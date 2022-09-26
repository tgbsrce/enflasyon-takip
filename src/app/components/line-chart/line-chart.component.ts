import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { LineData } from 'src/app/models/inflation.model';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css'],
})
export class LineChartComponent implements OnInit, OnChanges {
  @Input() newData!: LineData;
  lineChartOption: any = {
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
    if (changes['newData']?.currentValue) {
      this.newData = changes['newData']?.currentValue;
      this.lineChartOption.xAxis.data = this.newData.axisData;
      this.lineChartOption.series[0].data = this.newData.data;
      this.lineChartOption = {...this.lineChartOption}
      console.log(this.lineChartOption)
    }
  }

  ngOnInit(): void {
    console.log(this.newData);
  }
}
