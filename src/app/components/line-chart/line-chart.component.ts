import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { EChartsOption } from 'echarts';
import { LineBarData } from 'src/app/models/inflation.model';
import { createLineChartOptions } from 'src/app/utils/chartOptions';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css'],
})
export class LineChartComponent implements OnInit, OnChanges {
  @Input() newData!: LineBarData;
  lineChartOption: EChartsOption = {};

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['newData']?.currentValue) {
      this.lineChartOption = createLineChartOptions(
        this.newData.axisData,
        this.newData.data
      );
    }
  }

  ngOnInit(): void {}
}
