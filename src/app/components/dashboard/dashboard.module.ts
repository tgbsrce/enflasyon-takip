import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard.routing';

@NgModule({
  imports: [
    DashboardRoutingModule,
    MatButtonModule,
    MatTableModule,
    MatSidenavModule,
  ],
  providers: [],
  declarations: [DashboardComponent],
  exports: [DashboardComponent],
})
export class DashboardModule {}
