import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';

import { ConstantsService } from '../../services/constants.service';

@Component({
  selector: 'app-sales-chart',
  templateUrl: './sales-chart.component.html',
  styleUrls: ['./sales-chart.component.scss']
})
export class SalesChartComponent implements OnInit {

  constructor(private constant: ConstantsService) {
    this.sales = this.constant.salesData;
  }

  sales: any;

  doughnutChartLabels: Label[];
  doughnutChartData: MultiDataSet;
  doughnutChartType: ChartType = 'doughnut';

  ngOnInit(): void {
    this.doughnutChartLabels = this.sales.map(sale => sale.name);
    this.doughnutChartData = this.sales.map(sale => sale.value);
  }
}
