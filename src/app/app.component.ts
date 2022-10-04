import { Component } from '@angular/core';
import { FlipchartsComponent } from './pages/flipcharts'; //!!
import { AuthenticationService } from './service/authentication/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Dynamic-Facilitation';

  constructor(public authenticationService: AuthenticationService) {}

  isFlipchartview: boolean = false;

  onActivate(e: any) {
    this.isFlipchartview = e instanceof FlipchartsComponent;
  }
}
