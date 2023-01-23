import { Injectable } from '@angular/core';
import { MeetingFull } from './meetings.states';

@Injectable()
export class MeetingService {
  public meeting = new MeetingFull();

  public initializeActiveMeeting() {
    this.meeting.title = 'Neues Meeting';
  }
}
