import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CountryFilterComponent } from "./country-filter.component";

const routes:Routes = [
    {
        path:'',
        component:CountryFilterComponent
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })

export class CountryFilterRoutingModule{}