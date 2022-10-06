import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { BarChartModule } from '../bar-chart/bar-chart.module';
import { BarModule } from '../bar/bar.module';
import { CountryFilterModule } from '../country-filter/country-filter.module';
import { DateFilterModule } from '../date-filter/date-filter.module';
import { GeneralComponent } from '../general/general.component';
import { LineChartModule } from '../line-chart/line-chart.module';
import { LineModule } from '../line/line.module';
import { PieChartModule } from '../pie-chart/pie-chart.module';
import { PieModule } from '../pie/pie.module';
import { GeneralRoutingModule } from './general.routing';

@NgModule({
  imports: [
    GeneralRoutingModule,
    CountryFilterModule,
    DateFilterModule,
    BarChartModule,
    LineChartModule,
    PieChartModule,
    LineModule,
    PieModule,
    BarModule,
    MatTabsModule,
  ],
  providers: [],
  declarations: [GeneralComponent],
  exports: [GeneralComponent],
})
export class GeneralModule {}
