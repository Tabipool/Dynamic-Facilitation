import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './service/authentication/authentication.service';
import { UserModel } from './service/authentication/signInData';
import { CounterService } from './state/counter/counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Dynamic-Facilitation';
  public count: number;
  userInfo?: UserModel;

  constructor(
    private _counterService: CounterService,
    private auth: AuthenticationService
  ) {}

  ngOnInit() {
    this.count = this._counterService.getValue();
    this.auth.userProfile.subscribe((data) => {
      this.userInfo = data;
    });
  }

  isFlipchartview: boolean = false;

  onActivate(e: any) {}
}
