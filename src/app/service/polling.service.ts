import { Injectable, OnDestroy } from '@angular/core';
import { catchError, Observable, of, timer, Subject } from 'rxjs';
import { RESTAPIServiceService } from './restapiservice.service';
import { retry, share, switchMap, takeUntil, tap } from 'rxjs/operators';
import { ItemListService } from './item-list.service';
import { Item } from 'app/state/Items/item.states';
import { FlipchartsModule } from 'app/pages/flipcharts/flipcharts.module';
import { MeetingService } from 'app/state/meetings/meeting.service';
import { Store } from '@ngrx/store';
import { State } from 'app/state';
import { setItemAction } from 'app/state/Items/item.actions';
import { MeetingFull } from 'app/state/meetings/meetings.states';

@Injectable()
export class PollingService {
  private stopPolling = new Subject();
  private allItems$: Observable<Item[]>;

  constructor(
    private restService: RESTAPIServiceService,
    private _meetingService: MeetingService,
    private store: Store<State>
  ) {
    console.log(restService.getMeetingById(1));
    this.allItems$ = timer(0, 5000).pipe(
      switchMap(async () =>
        //restService.getMeetingById(_meetingService.activeMeeting.id)
        restService
          .getMeetingById(1)
          .subscribe((data) =>
            store.dispatch(setItemAction({ items: data.fk_idmeeting }))
          )
      ), //active meeting
      retry(2),
      tap(console.log),
      share(),
      takeUntil(this.stopPolling),
      catchError((err) => {
        console.log(err);
        return of([]);
      })
    );
  }

  getAllItems() {
    return this.allItems$;
  }

  onDestroy(): void {
    this.stopPolling.next(null);
    console.log('test');
  }
}
