import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VolumesChartComponent } from './volumes-chart.component';

describe('VolumesChartComponent', () => {
  let component: VolumesChartComponent;
  let fixture: ComponentFixture<VolumesChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VolumesChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolumesChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
