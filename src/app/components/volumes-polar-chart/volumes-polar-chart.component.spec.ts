import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VolumesPolarChartComponent } from './volumes-polar-chart.component';

describe('VolumesPolarChartComponent', () => {
  let component: VolumesPolarChartComponent;
  let fixture: ComponentFixture<VolumesPolarChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VolumesPolarChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolumesPolarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
