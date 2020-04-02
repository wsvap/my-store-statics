import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';

import { ConstantsService } from '../../services/constants.service';

@Component({
  selector: 'app-volumes-pie-chart',
  templateUrl: './volumes-pie-chart.component.html',
  styleUrls: ['./volumes-pie-chart.component.scss']
})
export class VolumesPieChartComponent implements OnInit {

  constructor(private constant: ConstantsService) {
    this.volumes = this.constant.volumesData;
  }

  volumes: any;

  public pieChartLabels: Label[];
  public pieChartData: number[];
  public pieChartType: ChartType = 'pie';

  ngOnInit(): void {
    this.pieChartLabels = this.volumes.map(volume => volume.name);
    this.pieChartData = this.volumes.map(volume => volume.value);
  }
}
