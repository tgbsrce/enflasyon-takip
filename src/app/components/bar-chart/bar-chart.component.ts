import { Component, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';
import { InflationService } from 'src/app/services/inflation.service';
@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {
  barChartOption: EChartsOption = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar'
      }
    ]
  }
  constructor(private inflationService: InflationService) { }

  ngOnInit(): void {
    this.inflationService.inflationRates$.subscribe(rates => {
      console.log("bar component inflationRates triggered!");
    })
  }

}
