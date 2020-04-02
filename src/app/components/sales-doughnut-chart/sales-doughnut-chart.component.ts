import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';

import { ConstantsService } from '../../services/constants.service';

@Component({
  selector: 'app-sales-doughnut-chart',
  templateUrl: './sales-doughnut-chart.component.html',
  styleUrls: ['./sales-doughnut-chart.component.scss']
})
export class SalesDoughnutChartComponent implements OnInit {

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
