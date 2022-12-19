import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Item } from '../state/Items/item.states';
import { MeetingFull, MeetingHome } from '../state/meetings/meetings.states';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RESTAPIServiceService {
  public baseUrl = 'http://localhost:8000';

  constructor(private http: HttpClient) {}

  //Meetings

  getMeetingsByModerator(idmoderator: number): Observable<any> {
    idmoderator = 3;
    return this.http.get<any>(
      this.baseUrl + '/moderators/' + idmoderator + '/meetings'
      //https://dynamicfacilitation.online/moderator/3/meetings
    );
  }

  getMeetingById(idmeeting: number): Observable<any> {
    //Wie macht man das mit den Items?
    return this.http.get<any>(this.baseUrl + '/meetings/' + idmeeting);
  }

  postMeeting(meeting: object): Observable<any> {
    return this.http.post<any>(this.baseUrl + '/meetings', meeting);
  }

  postItem(item: Item, idmeeting: number): Observable<any> {
    return this.http.post<any>(
      this.baseUrl + '/meetings/' + idmeeting + '/items',
      item
    );
  }
}
