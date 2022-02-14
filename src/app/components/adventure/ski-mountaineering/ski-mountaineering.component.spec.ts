import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkiMountaineeringComponent } from './ski-mountaineering.component';

describe('SkiMountaineeringComponent', () => {
  let component: SkiMountaineeringComponent;
  let fixture: ComponentFixture<SkiMountaineeringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkiMountaineeringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkiMountaineeringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
