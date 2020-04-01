import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangesChartComponent } from './exchanges-chart.component';

describe('ExchangesChartComponent', () => {
  let component: ExchangesChartComponent;
  let fixture: ComponentFixture<ExchangesChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExchangesChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExchangesChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
