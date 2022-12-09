import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Item } from '../state/Items/Item.states';
import { MeetingFull, MeetingHome } from '../state/meetings/meetings.states';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RESTAPIServiceService {
  public baseUrl = 'http://dynamicfacilitation.online';

  constructor(private http: HttpClient) {}

  //Meetings

  getMeetingsByModerator(idmoderator: number): Observable<MeetingHome[]> {
    return this.http.get<MeetingHome[]>(
      '${baseUrl}/moderator/${idmoderator}/meetings'
      //https://dynamicfacilitation.online/moderator/3/meetings
    );
  }

  getMeetingById(idmeeting: number): Observable<MeetingFull> {
    //Wie macht man das mit den Items?
    return this.http.get<MeetingFull>('${baseUrl}/meetings/${idmeeting}');
  }

  postMeeting(meeting: object): Observable<object> {
    return this.http.post<object>('${baseUrl}/meetings', meeting);
  }

  postItem(item: Item, idmeeting: number): Observable<Item> {
    return this.http.post<Item>('${baseUrl}/meetings/${idmeeting}/items', item);
  }
}
