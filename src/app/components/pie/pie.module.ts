import { NgModule } from '@angular/core';
import { CountryFilterModule } from '../country-filter/country-filter.module';
import { DateFilterModule } from '../date-filter/date-filter.module';
import { PieChartModule } from '../pie-chart/pie-chart.module';
import { PieComponent } from './pie.component';

@NgModule({
  imports: [CountryFilterModule, DateFilterModule, PieChartModule],
  providers: [],
  declarations: [PieComponent],
  exports: [PieComponent],
})
export class PieModule {}
