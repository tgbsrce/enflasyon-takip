import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { EChartsOption } from 'echarts';
import { PieData } from 'src/app/models/inflation.model';
import { createPieChartOptions } from 'src/app/utils/chartOptions';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css'],
})
export class PieChartComponent implements OnInit, OnChanges {
  @Input() newPieData!: Array<PieData>;
  pieChartOption: EChartsOption = {};
  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['newPieData']?.currentValue) {
      this.pieChartOption = createPieChartOptions(this.newPieData);
    }
  }

  ngOnInit(): void {}
}
