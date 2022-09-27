import { EChartsOption } from "echarts"

export const createLineChartOptions = (axisData: string[], data: number[]) : EChartsOption => {
    return {
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: axisData,
          },
          yAxis: {
            type: 'value',
          },
          series: [
            {
              data: data,
              type: 'line',
              areaStyle: {},
            },
          ],
    }
}