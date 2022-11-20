import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'app/service/authentication/authentication.service';
import { ChartStateService } from 'app/state/chart-states/chart-states.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(
    private router: Router,
    public _chartStateService: ChartStateService
  ) {}

  goToHomeview() {
    this.router.navigate(['/home']);
  }

  ToggleOfCourseChart() {
    this._chartStateService.ToggleOfCourseChart();
  }

  ToggleBookmarkChart() {
    this._chartStateService.ToggleBookmarkChart();
  }

  @Input() flipchart: boolean | undefined;
}
