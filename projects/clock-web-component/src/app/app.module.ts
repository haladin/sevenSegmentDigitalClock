import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { SevenSegmentClockLibModule } from '../../../../dist/seven-segment-clock-lib';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [     
    AppComponent   
  ],
  imports: [
    BrowserModule,
    SevenSegmentClockLibModule
  ],
  entryComponents: [AppComponent],
  providers: []
})
export class AppModule { 

  constructor(private injector: Injector) {}

  ngDoBootstrap(){
    const customElement = createCustomElement(AppComponent, {injector: this.injector});
    customElements.define('app-display-clock', customElement);
  }
}