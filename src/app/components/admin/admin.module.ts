import { NgModule } from '@angular/core';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin.routing';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    AdminRoutingModule,
    MatSidenavModule,
    MatTableModule,
    MatButtonModule,
  ],
  providers: [],
  declarations: [AdminComponent],
  exports: [AdminComponent],
})
export class AdminModule {}
