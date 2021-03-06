import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

import { ConstantsService } from '../../services/constants.service';

@Component({
  selector: 'app-exchanges-bar-chart',
  templateUrl: './exchanges-bar-chart.component.html',
  styleUrls: ['./exchanges-bar-chart.component.scss']
})
export class ExchangesBarChartComponent implements OnInit {

  constructor(private constant: ConstantsService) {
    this.exchanges = this.constant.exchangeData;
  }

  exchanges: any;

  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: Label[];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];
  barChartData: ChartDataSets[];

  ngOnInit(): void {
    const barChartDataPrices = this.exchanges.map(exchange => exchange.value);
    this.barChartData = [
      {data: barChartDataPrices, label: 'Apple prices'},
    ];
    this.barChartLabels = this.exchanges.map(exchange => exchange.id);
  }
}
