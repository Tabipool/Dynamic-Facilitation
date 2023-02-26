import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Item } from '../state/Items/item.states';
import { MeetingFull, MeetingHome } from '../state/meetings/meetings.states';
import { catchError, Observable } from 'rxjs';
import { Moderator } from 'app/state/moderator/moderator.states';
import { UserModel } from './authentication/signInData';

@Injectable({
  providedIn: 'root',
})
export class RESTAPIServiceService {
  public baseUrl = 'http://localhost:8000';

  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
    return this.http.post(
      this.baseUrl + '/login',
      { username, password },
      { withCredentials: true }
    );
  }

  getUser() {
    return this.http.get<UserModel>('http://localhost:3000/user-profile', {
      withCredentials: true,
    });
  }

  refresh() {
    return this.http.get('http://localhost:3000/refresh', {
      withCredentials: true,
    });
  }

  logout() {
    return this.http.get('http://localhost:3000/logout', {
      withCredentials: true,
    });
  }

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

  putMeeting(meeting: MeetingFull): Observable<any> {
    //full?
    return this.http.put<any>(
      this.baseUrl + '/meetings/' + meeting.id,
      meeting
    );
  }

  postItem(item: Item, idmeeting: number): Observable<any> {
    return this.http.post<any>(
      this.baseUrl + '/meetings/' + idmeeting + '/items/',
      item
    );
  }

  putItem(item: Item, idmeeting: number): Observable<any> {
    return this.http.put<any>(
      this.baseUrl + '/meetings/' + idmeeting + '/items/',
      item
    );
  }

  deleteItem(itemId: number, idmeeting: number): Observable<any> {
    return this.http.delete<any>(
      this.baseUrl + '/meetings/' + idmeeting + '/items/' + itemId
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
