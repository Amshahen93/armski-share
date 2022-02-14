import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrekkingTourArmeniaComponent } from './trekking-tour-armenia.component';

describe('TrekkingTourArmeniaComponent', () => {
  let component: TrekkingTourArmeniaComponent;
  let fixture: ComponentFixture<TrekkingTourArmeniaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrekkingTourArmeniaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrekkingTourArmeniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
