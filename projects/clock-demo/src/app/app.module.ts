import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { SevenSegmentClockLibModule } from '../../../../dist/seven-segment-clock-lib';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SevenSegmentClockLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
