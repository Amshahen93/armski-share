import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MountKazbegiComponent } from './mount-kazbegi.component';

describe('MountKazbegiComponent', () => {
  let component: MountKazbegiComponent;
  let fixture: ComponentFixture<MountKazbegiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MountKazbegiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MountKazbegiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
