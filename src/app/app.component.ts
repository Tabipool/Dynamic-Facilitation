import { Component } from '@angular/core';
import { FlipchartsComponent } from './pages/flipcharts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Dynamic-Facilitation';

  isFlipchartview: boolean = false;

  onActivate(e: any) {
    this.isFlipchartview = e instanceof FlipchartsComponent;
  }
}
