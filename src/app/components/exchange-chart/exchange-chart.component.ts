import { Component, OnInit } from '@angular/core';
import { ChartDataSets } from 'chart.js';
import { Color, Label } from 'ng2-charts';

import { ConstantsService } from '../../services/constants.service';

@Component({
  selector: 'app-exchange-chart',
  templateUrl: './exchange-chart.component.html',
  styleUrls: ['./exchange-chart.component.scss']
})
export class ExchangeChartComponent implements OnInit {

  constructor(private constant: ConstantsService) {
    this.exchanges = this.constant.exchangeData;
  }

  exchanges: any;

  /*lineChartData: ChartDataSets[] = [
    {data: [85, 72, 78, 75, 77, 75], label: 'Crude oil prices'},
  ];*/
  lineChartData: ChartDataSets[];

  // lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June'];
  lineChartLabels: Label[];

  lineChartOptions = {
    responsive: true,
  };

  lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,255,0,0.28)',
    },
  ];

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';

  ngOnInit(): void {
    const dates = this.exchanges.map(exchange => exchange.date);
    const formattedDates = dates.map((item, index, array) =>
      Intl.DateTimeFormat('hu-HU').format(item)
    );
    this.lineChartLabels = formattedDates;

    const lineChartDataPrices = this.exchanges.map(exchange => exchange.value);
    const lineChartDataLabel = 'Apple prices (' + formattedDates[0] + ' - ' + formattedDates.slice(-1)[0] + ')';
    this.lineChartData = [
      {data: lineChartDataPrices, label: lineChartDataLabel},
    ];


  }

}
