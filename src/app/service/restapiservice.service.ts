import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Item } from '../state/Items/Item.states';
import { Meeting } from '../state/meetings/meetings.states';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RESTAPIServiceService {
  public baseUrl = 'http://dynamicfacilitation.online';

  constructor(private http: HttpClient) {}

  getMeetingsByModerator(idmoderator: number): Observable<Meeting[]> {
    return this.http.get<Meeting[]>(
      '${baseUrl}/moderator/${idmoderator}/meetings'
    );
  }
}
