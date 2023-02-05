import { Injectable } from '@angular/core';
import { MeetingFull } from './meetings.states';

@Injectable()
export class MeetingService {
  public activeMeeting = new MeetingFull();

  public initializeNewActiveMeeting() {
    this.activeMeeting.title = 'Neues Meeting';
  }

  public initializeActiveMeeting(meeting: MeetingFull) {
    this.activeMeeting.title = meeting.title;
    this.activeMeeting.description = meeting.description;
    this.activeMeeting.id = meeting.id;
  }
}
