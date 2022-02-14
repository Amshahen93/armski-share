import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArmenianHighlandComponent } from './armenian-highland.component';

describe('ArmenianHighlandComponent', () => {
  let component: ArmenianHighlandComponent;
  let fixture: ComponentFixture<ArmenianHighlandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArmenianHighlandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArmenianHighlandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
