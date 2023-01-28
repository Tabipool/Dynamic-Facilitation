import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModeratorDetailedComponent } from 'app/components/moderator-detailed/moderator-detailed.component';
import { RESTAPIServiceService } from 'app/service/restapiservice.service';
import { MeetingHome } from 'app/state/meetings/meetings.states';
import { Moderator } from 'app/state/moderator/moderator.states';

@Component({
  selector: 'app-homeview',
  templateUrl: './homeview.component.html',
  styleUrls: ['./homeview.component.scss'],
})
export class HomeviewComponent implements OnInit {
  constructor(
    private router: Router,
    private restService: RESTAPIServiceService,
    private overlay: Overlay
  ) {}

  public meetings: MeetingHome[];
  public meetingsMock: MeetingHome[];
  public moderators: Moderator[];

  ngOnInit() {
    //this.initializeMockData();
    this.restService.getMeetingsByModerator(1).subscribe(
      (data) => {
        this.meetings = data;
      },
      (error) => console.log(error)
    );

    this.restService.getModerators().subscribe(
      (data) => {
        this.moderators = data;
      },
      (error) => console.log(error)
    );
  }

  newSession() {
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
        title: 'Wo muss Tierschutz verbessert werden',
        description: 'Besprechung über den Tierschutz',
        savedate: new Date('2022-12-12'),
      },
    ];
  }
}
