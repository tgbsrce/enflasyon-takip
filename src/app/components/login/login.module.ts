import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login.routing';

@NgModule({
  imports: [LoginRoutingModule],
  providers: [],
  declarations: [LoginComponent],
  exports: [LoginComponent],
})
export class LoginModule {}
