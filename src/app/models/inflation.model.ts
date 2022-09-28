export class InflationData {
  Country: number;
  InflationRate: number;
  InflationRateFormatted: number;
  InflationRateRounded: number;
  Month: string;
  MonthFormatted: string;

  constructor(data: any) {
    this.Country = data.Country || 0;
    this.InflationRate = data.InflationRate || 0;
    this.InflationRateFormatted = +data.InflationRateFormatted || 0;
    this.InflationRateRounded = data.InflationRateRounded || 0;
    this.Month = data.Month || '';
    this.MonthFormatted = data.MonthFormatted || '';
  }
}
export class LineBarData {
  axisData: Array<string>;
  data: Array<number>;

  constructor() {
    this.axisData = [];
    this.data = [];
  }
}
export class PieData {
  value?: number;
  name?: string;
  constructor(data?: PieData) {
    this.value = data?.value || 0;
    this.name = data?.name || '';
  }
}
