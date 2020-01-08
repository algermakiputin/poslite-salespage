import { Component } from '@angular/core';
import { FacebookService, InitParams } from 'ngx-facebook';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'salespage';

  constructor(private facebookService: FacebookService) { }

  private initFacebookService(): void {
      const initParams: InitParams = { xfbml: true, version: 'v3.2' };
      this.facebookService.init(initParams);
  }
}
