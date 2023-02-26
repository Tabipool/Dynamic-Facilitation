import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModeratorDetailedComponent } from 'app/components/moderator-detailed/moderator-detailed.component';
import { RESTAPIServiceService } from 'app/service/restapiservice.service';
import { MeetingHome } from 'app/state/meetings/meetings.states';
import { Moderator } from 'app/state/moderator/moderator.states';
import { MeetingService } from 'app/state/meetings/meeting.service';
import { AuthenticationService } from 'app/service/authentication/authentication.service';
import { UserModel } from 'app/service/authentication/signInData';

@Component({
  selector: 'app-homeview',
  templateUrl: './homeview.component.html',
  styleUrls: ['./homeview.component.scss'],
})
export class HomeviewComponent implements OnInit {
  constructor(
    private router: Router,
    private restService: RESTAPIServiceService,
    private _meetingService: MeetingService,
    private auth: AuthenticationService
  ) {}

  public meetings: MeetingHome[];
  public meetingsMock: MeetingHome[];
  public moderators: Moderator[];
  userInfo?: UserModel;

  ngOnInit() {
    this.auth.userProfile.subscribe((data) => {
      this.userInfo = data;
    });
    this.initializeMockData();
    this.restService.getMeetingsByModerator(1).subscribe(
      (data) => {
        this.meetings = data;
      },
      (error) => console.log(error)
    );

    //if admin
    this.restService.getModerators().subscribe(
      (data) => {
        this.moderators = data;
      },
      (error) => console.log(error)
    );
  }

  newSession() {
    this.restService
      .postMeeting(this._meetingService.activeMeeting)
      .subscribe((data) => {
        this._meetingService.initializeActiveMeeting(data);
      });
    this.router.navigate(['/flipcharts']);
  }

  newIssue() {
    this.router.navigate(['/issuecollector']);
  }

  initializeMockData() {
    this.meetingsMock = [
      {
        id: 1,
        title: 'Klimawandel und seine Auswirkungen',
        description: 'Besprechung über den Klimawandel',
        savedate: new Date('2022-08-12'),
      },
      {
        id: 2,
        title: 'Gleichberechtigung auf der Welt',
        description: 'Besprechung über Gleichberechtigung',
        savedate: new Date('2022-10-15'),
      },
      {
        id: 3,
        title: 'Marketingmethoden',
        description: 'Besprechung über Marketingmethoden',
        savedate: new Date('2022-11-03'),
      },
      {
        id: 4,
        title: 'Was ist Dynamic Facilitation?',
        description: 'Besprechung über den Tierschutz',
        savedate: new Date('2022-12-12'),
      },
      {
        id: 5,
        title: 'Das AIDA-Prinzip',
        description: 'Besprechung über den Tierschutz',
        savedate: new Date('2022-12-12'),
      },
      {
        id: 6,
        title: 'Was macht einen guten Moderator aus?',
        description: 'Besprechung über den Tierschutz',
        savedate: new Date('2022-12-12'),
      },
      {
        id: 7,
        title: 'DigBiz-Award Präsentation',
        description: 'Besprechung über den Tierschutz',
        savedate: new Date('2022-12-12'),
      },
    ];
  }
}
