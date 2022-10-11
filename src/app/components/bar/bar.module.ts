import { NgModule } from '@angular/core';
import { BarChartModule } from '../bar-chart/bar-chart.module';
import { CountryFilterModule } from '../country-filter/country-filter.module';
import { DateFilterModule } from '../date-filter/date-filter.module';
import { BarComponent } from './bar.component';
import { BarRoutingModule } from './bar.routing';

@NgModule({
  imports: [CountryFilterModule, DateFilterModule, BarChartModule],
  providers: [],
  declarations: [BarComponent],
  exports: [BarComponent],
})
export class BarModule {}
