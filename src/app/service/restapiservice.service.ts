import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Item } from '../state/Items/item.states';
import { MeetingFull, MeetingHome } from '../state/meetings/meetings.states';
import { catchError, Observable } from 'rxjs';
import { Moderator } from 'app/state/moderator/moderator.states';

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
    return this.http.get<any>(this.baseUrl + '/meetings/' + idmeeting + '/');
  }

  postMeeting(meeting: MeetingFull): Observable<any> {
    //full?
    return this.http.post<any>(this.baseUrl + '/meetings/', meeting);
  }

  postItem(item: Item, idmeeting: number): Observable<any> {
    return this.http.post<any>(
      this.baseUrl + '/meetings/' + idmeeting + '/items/',
      item
    );
  }

  //Moderators

  getModerators(): Observable<Moderator[]> {
    //testen
    return this.http.get<Moderator[]>(this.baseUrl + '/moderators/');
  }

  postModerator(moderator: Moderator): Observable<Moderator> {
    return this.http.post<Moderator>(this.baseUrl + '/moderators/', moderator);
    //.pipe(catchError(this.handleError));
  }

  deleteModerator(id: number): Observable<unknown> {
    return this.http.delete(this.baseUrl + '/moderators/' + id);
  }
}
