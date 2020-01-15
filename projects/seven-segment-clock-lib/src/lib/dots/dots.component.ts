import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-dots',
  templateUrl: './dots.component.html',
  styleUrls: ['./dots.component.css']
})
export class DotsComponent implements OnInit {

  private interval: any;
  turnOn = '0';

  constructor() { }

  ngOnInit() { }

  ngAfterViewInit() {
    this.interval = setInterval(() => {
      if (this.turnOn === '0') {
        this.turnOn = 'segOnDot';
      } else {
        this.turnOn = '0';
      }
    }, 500);
  }
}
