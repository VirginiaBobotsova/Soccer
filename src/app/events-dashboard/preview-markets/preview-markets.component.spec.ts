import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewMarketsComponent } from './preview-markets.component';

describe('PreviewMarketsComponent', () => {
  let component: PreviewMarketsComponent;
  let fixture: ComponentFixture<PreviewMarketsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PreviewMarketsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewMarketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
