import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitComponent } from './digit.component';

describe('DigitComponent', () => {
  let component: DigitComponent;
  let fixture: ComponentFixture<DigitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DigitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    component.item = {digit: 8};
    expect(component).toBeTruthy();
  });

  it('status should be 8', () => {
    component.item = {digit: 8};
    expect(component.state).toEqual(['segOnDigit', 'segOnDigit', 'segOnDigit', 'segOnDigit', 'segOnDigit', 'segOnDigit', 'segOnDigit']);
  });
});
