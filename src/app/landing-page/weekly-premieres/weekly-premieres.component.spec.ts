import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyPremieresComponent } from './weekly-premieres.component';

describe('WeeklyPremieresComponent', () => {
  let component: WeeklyPremieresComponent;
  let fixture: ComponentFixture<WeeklyPremieresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeeklyPremieresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeeklyPremieresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
