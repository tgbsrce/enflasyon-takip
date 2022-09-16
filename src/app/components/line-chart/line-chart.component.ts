import { Component, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';
import { InflationService } from '../../services/inflation.service';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {
  lineChartOption: EChartsOption = {
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    yAxis: {
      type: 'value'
    },
    
    series: [{
      data: [820, 932, 901, 934, 1290, 1430, 1550, 1200, 1650.1450, 1680.1890],
      type: 'line',
      areaStyle: {}
    }]
  }
  constructor(private inflationService: InflationService) { }

  ngOnInit(): void {
    this.inflationService.inflationRates$.subscribe(rates => {
      console.log("line component inflationRates triggered!");
    })
  }

}
