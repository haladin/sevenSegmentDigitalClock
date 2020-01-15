import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'lib-digit',
  templateUrl: './digit.component.html',
  styleUrls: ['./digit.component.css']
})
export class DigitComponent implements OnInit {

  private number: number = 0;
  private init: boolean = false;

  @Input()
  set item(val: any) {
    this.number = val.digit;
    if (this.init){
      if (this.number >= 0 ) {
        this.state = this.numbers[this.number];
      } else {
        this.state = this.off;
      }
    }
  }

  state: string[] = ['0', '0', '0', '0', '0', '0', '0'];
  private off: string[] = ['0', '0', '0', '0', '0', '0', '0'];

  private numbers: string[][] = [
      ['segOnDigit', 'segOnDigit', 'segOnDigit', 'segOnDigit', 'segOnDigit', 'segOnDigit', '0'],
      ['0', 'segOnDigit', 'segOnDigit', '0', '0', '0', '0'],
      ['segOnDigit', 'segOnDigit', '0', 'segOnDigit', 'segOnDigit', '0', 'segOnDigit'],
      ['segOnDigit', 'segOnDigit', 'segOnDigit', 'segOnDigit', '0', '0', 'segOnDigit'],
      ['0', 'segOnDigit', 'segOnDigit', '0', '0', 'segOnDigit', 'segOnDigit'],
      ['segOnDigit', '0', 'segOnDigit', 'segOnDigit', '0', 'segOnDigit', 'segOnDigit'],
      ['segOnDigit', '0', 'segOnDigit', 'segOnDigit', 'segOnDigit', 'segOnDigit', 'segOnDigit'],
      ['segOnDigit', 'segOnDigit', 'segOnDigit', '0', '0', '0', '0'],
      ['segOnDigit', 'segOnDigit', 'segOnDigit', 'segOnDigit', 'segOnDigit', 'segOnDigit', 'segOnDigit'],
      ['segOnDigit', 'segOnDigit', 'segOnDigit', 'segOnDigit', '0', 'segOnDigit', 'segOnDigit']
  ];

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.state = this.off;
    this.init = true;
    this.item = this.number;
  }
}
