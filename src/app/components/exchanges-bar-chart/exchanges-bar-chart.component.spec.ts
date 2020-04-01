import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangesBarChartComponent } from './exchanges-bar-chart.component';

describe('ExchangesChartComponent', () => {
  let component: ExchangesBarChartComponent;
  let fixture: ComponentFixture<ExchangesBarChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExchangesBarChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExchangesBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
