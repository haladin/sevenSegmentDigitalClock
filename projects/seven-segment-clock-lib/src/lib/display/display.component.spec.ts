import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DisplayComponent } from './display.component';
import { Component, Input } from '@angular/core';
import { TimeFormat } from './timeFormat';

@Component({
  selector: 'lib-two-digit-segment',
  template: ''
})
export class TwoDigitSegmentMockComponent {
  @Input()
  public item: any;
}

@Component({
  selector: 'lib-dots',
  template: ''
})
export class DotsMockComponent {
}

@Component({
  selector: 'lib-am-pm',
  template: ''
})
export class AmPmMockComponent {
  @Input()
  public item: any;
}

describe('DisplayComponent', () => {
  let component: DisplayComponent;
  let fixture: ComponentFixture<DisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayComponent, TwoDigitSegmentMockComponent, DotsMockComponent, AmPmMockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    component.config = 'HHmmsstt';
    expect(component).toBeTruthy();
  });

  it('check hours HH format', () => {
    component.config = 'HHmmss';
    expect(component.timeFormatter.GetHours(23)).toEqual({firstNumber: 2, secondNumber: 3});
  });

  it('check hours hh format', () => {
    component.config = 'hhmmss';
    component.timeFormatter = new TimeFormat(component.config);
    expect(component.timeFormatter.GetHours(12)).toEqual({firstNumber: 1, secondNumber: 2});
  });

  it('check hours h format', () => {
    component.config = 'hmmss';
    component.timeFormatter = new TimeFormat(component.config);
    expect(component.timeFormatter.GetHours(20)).toEqual({firstNumber: -1, secondNumber: 8});
  });

  it('check minutes m format', () => {
    component.config = 'hhmss';
    component.timeFormatter = new TimeFormat(component.config);
    expect(component.timeFormatter.GetMinutes(5)).toEqual({firstNumber: -1, secondNumber: 5});
  });

  it('check minutes mm format', () => {
    component.config = 'hhmmss';
    component.timeFormatter = new TimeFormat(component.config);
    expect(component.timeFormatter.GetMinutes(3)).toEqual({firstNumber: 0, secondNumber: 3});
  });

  it('check seconds s format', () => {
    component.config = 'hhms';
    component.timeFormatter = new TimeFormat(component.config);
    expect(component.timeFormatter.GetMinutes(5)).toEqual({firstNumber: -1, secondNumber: 5});
  });

  it('check seconds ss format', () => {
    component.config = 'hhmmss';
    component.timeFormatter = new TimeFormat(component.config);
    expect(component.timeFormatter.GetMinutes(3)).toEqual({firstNumber: 0, secondNumber: 3});
  });

  it('check AM/PM after 12:00 noon format', () => {
    component.config = 'hhmmsstt';
    component.timeFormatter = new TimeFormat(component.config);
    expect(component.timeFormatter.GetAmPm(23)).toEqual({digit: 'pm'});
  });

  it('check AM/PM before 12:00 noon format', () => {
    component.config = 'hhmmsstt';
    component.timeFormatter = new TimeFormat(component.config);
    expect(component.timeFormatter.GetAmPm(6)).toEqual({digit: 'am'});
  });

  it('check AM/PM off format', () => {
    component.config = 'hhmmss';
    component.timeFormatter = new TimeFormat(component.config);
    expect(component.timeFormatter.GetAmPm(6)).toEqual({digit: 'off'});
  });

  it('check wrong formatting', () => {
    component.config = 'hhmmssrr';
    component.timeFormatter = new TimeFormat(component.config);
    expect(component.timeFormatter.GetHours(23)).toEqual({firstNumber: 2, secondNumber: 3});
    expect(component.timeFormatter.GetMinutes(3)).toEqual({firstNumber: 0, secondNumber: 3});
    expect(component.timeFormatter.GetMinutes(3)).toEqual({firstNumber: 0, secondNumber: 3});
    expect(component.timeFormatter.GetAmPm(6)).toEqual({digit: 'off'});
  });
});
