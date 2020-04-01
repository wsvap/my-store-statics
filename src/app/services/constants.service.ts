import { Injectable } from '@angular/core';

import * as data from '../proba_6.json';

@Injectable({
  providedIn: 'root'
})
export class ConstantsService {

  readonly jsonData: any = (data as any).default;
  readonly salesData = this.jsonData.sales;
  readonly volumesData = this.jsonData.volumes;

}
