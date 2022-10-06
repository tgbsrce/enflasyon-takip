import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilterSettingsComponent } from './filter-settings.component';

const routes: Routes = [
  {
    path: '',
    component: FilterSettingsComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FilterSettingsRoutingModule {}
