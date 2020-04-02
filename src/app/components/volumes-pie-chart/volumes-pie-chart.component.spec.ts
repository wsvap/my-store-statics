import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VolumesPieChartComponent } from './volumes-pie-chart.component';

describe('VolumesChartComponent', () => {
  let component: VolumesPieChartComponent;
  let fixture: ComponentFixture<VolumesPieChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VolumesPieChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolumesPieChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
