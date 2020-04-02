import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { ChartsModule } from 'ng2-charts';
import { ConstantsService } from './services/constants.service';
import { ExchangesBarChartComponent } from './components/exchanges-bar-chart/exchanges-bar-chart.component';
import { ExchangesLineChartComponent } from './components/exchanges-line-chart/exchanges-line-chart.component';
import { SalesDoughnutChartComponent } from './components/sales-doughnut-chart/sales-doughnut-chart.component';
import { VolumesPieChartComponent } from './components/volumes-pie-chart/volumes-pie-chart.component';
import { VolumesPolarChartComponent } from './components/volumes-polar-chart/volumes-polar-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    ExchangesBarChartComponent,
    ExchangesLineChartComponent,
    SalesDoughnutChartComponent,
    VolumesPieChartComponent,
    VolumesPolarChartComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule
  ],
  providers: [ConstantsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
