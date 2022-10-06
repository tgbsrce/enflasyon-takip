import { NgModule } from '@angular/core';
import { FilterSettingsComponent } from './filter-settings.component';
import { FilterSettingsRoutingModule } from './filter-settings.routing';
import { MatSelectModule } from '@angular/material/select';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { DateFilterModule } from '../date-filter/date-filter.module';
import { CountryFilterModule } from '../country-filter/country-filter.module';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    FilterSettingsRoutingModule,
    MatSelectModule,
    FlexLayoutModule,
    MatToolbarModule,
    CommonModule,
    MatDatepickerModule,
    DateFilterModule,
    CountryFilterModule,
    MatButtonModule,
  ],
  providers: [],
  declarations: [FilterSettingsComponent],
  exports: [FilterSettingsComponent],
})
export class FilterSettingsModule {}
