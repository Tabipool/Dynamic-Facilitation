import { Injectable, OnDestroy } from '@angular/core';
import { catchError, Observable, of, timer, Subject } from 'rxjs';
import { RESTAPIServiceService } from './restapiservice.service';
import { retry, share, switchMap, takeUntil, tap } from 'rxjs/operators';
import { ItemListService } from './item-list.service';
import { Item } from 'app/state/Items/item.states';
import { FlipchartsModule } from 'app/pages/flipcharts/flipcharts.module';

@Injectable()
export class PollingService {
  meetingId: number = 1;
  private stopPolling = new Subject();
  private allItems$: Observable<Item[]>;

  constructor(private restService: RESTAPIServiceService) {
    this.allItems$ = timer(0, 5000).pipe(
      switchMap(() => restService.getMeetingById(this.meetingId)), //active meeting
      retry(),
      tap(console.log),
      share(),
      takeUntil(this.stopPolling),
      catchError((err) => {
        console.log(err);
        return of([]);
      })
    );

    /*restService
      .getMeetingById(this.meetingId)
      .subscribe((error) => console.log(error));
    console.log('bye');*/
  }

  getAllItems() {
    return this.allItems$.pipe(
      tap(() => console.log('data sent to subscriber'))
    );
  }

  onDestroy(): void {
    this.stopPolling.next(null);
    console.log('test');
  }
}
