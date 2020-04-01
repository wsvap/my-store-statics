import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangesLineChartComponent } from './exchanges-line-chart.component';

describe('ExchangeChartComponent', () => {
  let component: ExchangesLineChartComponent;
  let fixture: ComponentFixture<ExchangesLineChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExchangesLineChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExchangesLineChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
