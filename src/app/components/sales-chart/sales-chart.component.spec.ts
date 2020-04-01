import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesChartComponent } from './sales-chart.component';

describe('SaleChartComponent', () => {
  let component: SalesChartComponent;
  let fixture: ComponentFixture<SalesChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
