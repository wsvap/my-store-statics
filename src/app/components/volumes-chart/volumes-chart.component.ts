import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';

import { ConstantsService } from '../../services/constants.service';

@Component({
  selector: 'app-volumes-chart',
  templateUrl: './volumes-chart.component.html',
  styleUrls: ['./volumes-chart.component.scss']
})
export class VolumesChartComponent implements OnInit {

  constructor(private constant: ConstantsService) {
    this.volumes = this.constant.volumesData;
  }

  volumes: any;

  doughnutChartLabels: Label[];
  doughnutChartData: MultiDataSet;
  doughnutChartType: ChartType = 'doughnut';

  ngOnInit(): void {
    this.doughnutChartLabels = this.volumes.map(volume => volume.name);
    this.doughnutChartData = this.volumes.map(volume => volume.value);
  }
}
