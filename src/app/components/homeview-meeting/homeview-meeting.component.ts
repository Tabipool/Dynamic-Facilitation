import { Component, Input, OnInit } from '@angular/core';
import { Meeting } from 'app/state/meetings/meetings.states';

@Component({
  selector: 'app-homeview-meeting',
  templateUrl: './homeview-meeting.component.html',
  styleUrls: ['./homeview-meeting.component.scss'],
})
export class HomeviewMeetingComponent implements OnInit {
  @Input()
  meeting: Meeting;

  constructor() {}

  ngOnInit(): void {}
}
