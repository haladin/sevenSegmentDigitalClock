import { Component, OnInit, ViewEncapsulation, Input, OnChanges } from '@angular/core';
import { SegmentData } from '../two-digit-segment/segmentData';
import { TimeFormat } from './timeFormat';

@Component({
  selector: 'lib-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class DisplayComponent implements OnInit, OnChanges {

  firstSegment: SegmentData = {
    firstNumber: 0,
    secondNumber: 0
  };

  secondSegment: SegmentData = {
    firstNumber: 0,
    secondNumber: 0
  };

  thirdSegment: SegmentData = {
    firstNumber: 0,
    secondNumber: 0
  };

  amPm = { digit: 'off' };

  private interval: any;

  @Input() config: string;

  timeFormatter: TimeFormat;

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.init();
  }

  ngOnChanges(changes: any) {    
    for (const key in changes) {
      if (key === 'config') {
        this.config = changes[key].currentValue;
        this.init();
      }
    }
  }

  init() {
    if (this.interval == null) {
      clearTimeout(this.interval);
    }
    this.timeFormatter = new TimeFormat(this.config);
    this.interval = setInterval(() => {
      const time = new Date();
      const hours = time.getHours();
      const minutes = time.getMinutes();
      const seconds = time.getSeconds();

      this.firstSegment = this.timeFormatter.GetHours(hours);
      this.secondSegment = this.timeFormatter.GetMinutes(minutes);
      this.thirdSegment = this.timeFormatter.GetSeconds(seconds);

      this.amPm = this.timeFormatter.GetAmPm(hours);
    }, 500);
  }

}
