import { Component, OnInit, Input } from '@angular/core';
import { SegmentData } from './segmentData';

@Component({
  selector: 'lib-two-digit-segment',
  templateUrl: './two-digit-segment.component.html',
  styleUrls: ['./two-digit-segment.component.css']
})
export class TwoDigitSegmentComponent implements OnInit {

  firstDigit: any;
  secondDigit: any;

  @Input()
  set item(val: SegmentData) {
    this.firstDigit = {digit: val.firstNumber};
    this.secondDigit = {digit: val.secondNumber};
  }

  constructor() { }

  ngOnInit() {
  }

}
