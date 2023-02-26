import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  Injectable,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { FlipchartsModule } from 'app/pages/flipcharts';
import { AuthenticationService } from 'app/service/authentication/authentication.service';
import { RESTAPIServiceService } from 'app/service/restapiservice.service';
import { ChartStateService } from 'app/state/chart-states/chart-states.service';
import { MeetingService } from 'app/state/meetings/meeting.service';
import { MeetingFull } from 'app/state/meetings/meetings.states';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(
    private cdRef: ChangeDetectorRef,
    public router: Router,
    public _chartStateService: ChartStateService,
    public _activeMeeting: MeetingService,
    private _restApiService: RESTAPIServiceService
  ) {}

  @ViewChild('editInput') editInput: ElementRef;

  public activeMeeting: MeetingFull = this._activeMeeting.getActiveMeeting();

  public editTitleState: boolean = false;

  editTitle() {
    this.editTitleState = true;

    this.cdRef.detectChanges();
    let inputField = this.editInput.nativeElement;

    setTimeout(function () {
      inputField.focus();
    }, 100);
  }

  saveChanges() {
    if (this.editInput.nativeElement.value.trim() != '') {
      this.editTitleState = false;
      this.activeMeeting.title = this.editInput.nativeElement.value.trim();
      this._restApiService
        .putMeeting(this._activeMeeting.activeMeeting)
        .subscribe((error) => console.log(error));
    }
  }

  goToHomeview() {
    this.router.navigate(['/home']);
  }

  ToggleOfCourseChart() {
    this._chartStateService.ToggleOfCourseChart();
  }

  ToggleBookmarkChart() {
    this._chartStateService.ToggleBookmarkChart();
  }
}
