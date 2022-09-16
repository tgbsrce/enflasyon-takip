import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DateFilterComponent } from "./date-filter.component";

const routes:Routes = [
    {
        path:'',
        component:DateFilterComponent
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })

export class DateFilterRoutingModule{}