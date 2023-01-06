import { Component, OnInit } from '@angular/core';
import { FlipchartsComponent } from './pages/flipcharts'; //!!
import { AuthenticationService } from './service/authentication/authentication.service';
import { CounterService } from './state/counter/counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Dynamic-Facilitation';
  public count: number;

  constructor(private _counterService: CounterService) {}

  ngOnInit() {
    this.count = this._counterService.getValue();
  }

  isFlipchartview: boolean = false;

  onActivate(e: any) {
    this.isFlipchartview = e instanceof FlipchartsComponent;
  }
}
