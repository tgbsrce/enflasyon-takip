import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { CountryFilterComponent } from './country-filter.component';

@NgModule({
  imports: [MatFormFieldModule, MatSelectModule, FormsModule, CommonModule],
  providers: [],
  declarations: [CountryFilterComponent],
  exports: [CountryFilterComponent],
})
export class CountryFilterModule {}
