import { EChartsOption } from 'echarts';
import { PieData } from '../models/inflation.model';

export const createLineChartOptions = (
  axisData: string[],
  data: number[]
): EChartsOption => {
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
  };
};
export const createBarChartOptions = (
  axisData: string[],
  data: number[]
): EChartsOption => {
  return {
    xAxis: {
      type: 'category',
      data: axisData,
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: data,
        type: 'bar',
      },
    ],
  };
};
export const createPieChartOptions = (
  pieData: Array<PieData>
): EChartsOption => {
  return {
    title: {
      left: 'center',
    },
    tooltip: {
      trigger: 'item',
    },
    legend: {
      show: false,
      orient: 'vertical',
      left: 'left',
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: '50%',
        data: pieData,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
          },
        },
      },
    ],
  };
};
