import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lib-am-pm',
  templateUrl: './am-pm.component.html',
  styleUrls: ['./am-pm.component.css']
})
export class AmPmComponent implements OnInit {

  @Input()
  set item(val: any) {
    if (val.digit === 'am' ) {
      this.am = 'segOnAmPm';
      this.pm = '0';
    } else if (val.digit === 'pm' ) {
      this.am = '0';
      this.pm = 'segOnAmPm';
    } else {
      this.am = '0';
      this.pm = '0';
    }
  }

  am: string = '0';
  pm: string = '0';

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.am = '0';
    this.pm = '0';
  }
}
