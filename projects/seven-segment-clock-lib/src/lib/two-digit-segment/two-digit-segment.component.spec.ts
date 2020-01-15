import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {  Component, Input } from '@angular/core';
import { TwoDigitSegmentComponent } from './two-digit-segment.component';
import { SegmentData } from './segmentData';

@Component({
  selector: 'lib-digit',
  template: ''
})
class DigitMockComponent {
  @Input()
  public item: any;
}

describe('TwoDigitSegmentComponent', () => {
  let component: TwoDigitSegmentComponent;
  let fixture: ComponentFixture<TwoDigitSegmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwoDigitSegmentComponent, DigitMockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoDigitSegmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    component.item = new SegmentData(8, 8);
    expect(component).toBeTruthy();
  });
});
