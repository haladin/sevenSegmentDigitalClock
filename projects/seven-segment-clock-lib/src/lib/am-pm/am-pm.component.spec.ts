import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmPmComponent } from './am-pm.component';

describe('AmPmComponent', () => {
  let component: AmPmComponent;
  let fixture: ComponentFixture<AmPmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmPmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmPmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
