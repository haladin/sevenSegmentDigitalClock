import { NgModule } from '@angular/core';
import { DisplayComponent } from './display/display.component';
import { DigitComponent } from './digit/digit.component';
import { TwoDigitSegmentComponent } from './two-digit-segment/two-digit-segment.component';
import { DotsComponent } from './dots/dots.component';
import { AmPmComponent } from './am-pm/am-pm.component';


@NgModule({
  declarations: [
    DigitComponent,
    DisplayComponent,
    TwoDigitSegmentComponent,
    DotsComponent,
    AmPmComponent
  ],
  imports: [
  ],
  exports: [DisplayComponent]
})
export class DigitalClockLibModule { }
