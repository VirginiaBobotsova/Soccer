import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketLinesComponent } from './market-lines.component';

describe('MarketLinesComponent', () => {
  let component: MarketLinesComponent;
  let fixture: ComponentFixture<MarketLinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MarketLinesComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketLinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
