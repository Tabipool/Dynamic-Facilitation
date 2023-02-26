import { Injectable } from '@angular/core';
import { MeetingFull } from './meetings.states';

@Injectable()
export class MeetingService {
  public activeMeeting = new MeetingFull();

  constructor() {
    this.activeMeeting.title = 'Titel des Meetings';
  }

  public initializeActiveMeeting(meeting: MeetingFull) {
    this.activeMeeting.title = meeting.title;
    this.activeMeeting.description = meeting.description;
    this.activeMeeting.id = meeting.id;
  }

  public getActiveMeeting() {
    return this.activeMeeting;
  }
}
