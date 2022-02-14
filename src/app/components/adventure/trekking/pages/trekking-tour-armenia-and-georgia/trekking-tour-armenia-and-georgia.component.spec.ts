import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrekkingTourArmeniaAndGeorgiaComponent } from './trekking-tour-armenia-and-georgia.component';

describe('TrekkingTourArmeniaAndGeorgiaComponent', () => {
  let component: TrekkingTourArmeniaAndGeorgiaComponent;
  let fixture: ComponentFixture<TrekkingTourArmeniaAndGeorgiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrekkingTourArmeniaAndGeorgiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrekkingTourArmeniaAndGeorgiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
