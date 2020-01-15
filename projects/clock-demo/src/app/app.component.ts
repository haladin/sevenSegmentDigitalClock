import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'clokc-demo';

  clockSize = "450px";
  config: string;
  clockConfig: string = 'HHmmss';
  configText: string = 'Default: HHmmss';

  onSizeButtonClicked(event: MouseEvent) {
    let elementId: string = (event.target as Element).id;
    switch (elementId) {
      case "small":
        this.clockSize = "250px";
        break;
      case "medium":
        this.clockSize = "450px";
        break;
      case "big":
        this.clockSize = "700px";
        break;
    }
  }

  setClockConfig() {
    this.clockConfig = this.config;
    this.config = '';
    this.configText = 'Config: ' + this.clockConfig;
  }

}
