import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { CountryFilterComponent } from './country-filter.component';



@NgModule({

imports: [MatFormFieldModule,MatSelectModule,FormsModule],
providers:  [],
declarations: [CountryFilterComponent],
exports:[CountryFilterComponent]

})

export class CountryFilterModule{}