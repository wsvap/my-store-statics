import { Component, OnInit } from '@angular/core';
import { SingleDataSet, Label } from 'ng2-charts';
import { ChartType } from 'chart.js';

import { ConstantsService } from '../../services/constants.service';

@Component({
  selector: 'app-volumes-polar-chart',
  templateUrl: './volumes-polar-chart.component.html',
  styleUrls: ['./volumes-polar-chart.component.scss']
})
export class VolumesPolarChartComponent implements OnInit {

  constructor(private constant: ConstantsService) {
    this.volumes = this.constant.volumesData;
  }

  volumes: any;

  polarAreaChartLabels: Label[];
  polarAreaChartData: SingleDataSet;
  polarAreaLegend = true;
  polarAreaChartType: ChartType = 'polarArea';

  ngOnInit(): void {
    this.polarAreaChartLabels = this.volumes.map(volume => volume.name);
    this.polarAreaChartData = this.volumes.map(volume => volume.value);
  }
}
