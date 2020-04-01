import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { ChartsModule } from 'ng2-charts';
import { ConstantsService } from './services/constants.service';
import { ExchangesChartComponent } from './components/exchanges-chart/exchanges-chart.component';
import { ExchangeChartComponent } from './components/exchange-chart/exchange-chart.component';
import { SalesChartComponent } from './components/sales-chart/sales-chart.component';
import { VolumesChartComponent } from './components/volumes-chart/volumes-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    ExchangesChartComponent,
    ExchangeChartComponent,
    SalesChartComponent,
    VolumesChartComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule
  ],
  providers: [ConstantsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
