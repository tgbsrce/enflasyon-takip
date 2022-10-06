export class Dashboard {
  id: string;
  name: string;
  charts: Array<string>;

  constructor(data: any) {
    this.id = data.id || '';
    this.name = data.name || '';
    this.charts = data.charts || [];
  }
}
