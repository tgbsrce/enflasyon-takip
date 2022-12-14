import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { CountryFilterModule } from './components/country-filter/country-filter.module';
import { DateFilterModule } from './components/date-filter/date-filter.module';
import { PieModule } from './components/pie/pie.module';
import { BarModule } from './components/bar/bar.module';
import { LineModule } from './components/line/line.module';
import { BarChartModule } from './components/bar-chart/bar-chart.module';
import { LineChartModule } from './components/line-chart/line-chart.module';
import { PieChartModule } from './components/pie-chart/pie-chart.module';
import { LoginModule } from './components/login/login.module';
import { DashboardModule } from './components/dashboard/dashboard.module';
import { FilterSettingsModule } from './components/filter-settings/filter-settings.module';
import { AuthInterceptor } from './auth.interceptor';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { DialogComponent } from './components/dialog/dialog.component';
import { MatIconModule } from '@angular/material/icon';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [AppComponent, DialogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatToolbarModule,
    MatSelectModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatInputModule,
    MatGridListModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CountryFilterModule,
    DateFilterModule,
    LineModule,
    PieModule,
    BarModule,
    BarChartModule,
    LineChartModule,
    PieChartModule,
    LoginModule,
    DashboardModule,
    FilterSettingsModule,
    MatSnackBarModule,
    MatIconModule,
    DragDropModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
