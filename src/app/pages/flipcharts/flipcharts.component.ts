import { Component, OnDestroy, OnInit } from '@angular/core';
import { ItemListService } from 'app/service/item-list.service';
import { ChartStateService } from 'app/state/chart-states/chart-states.service';
import { chartType } from '../../../types/chartType';
import { Store } from '@ngrx/store';
import { State } from 'app/state';
import { Item } from 'app/state/Items/item.states';
import { Observable } from 'rxjs';
import { RESTAPIServiceService } from 'app/service/restapiservice.service';
import { PollingService } from 'app/service/polling.service';
import { retry, share, switchMap, takeUntil, tap } from 'rxjs/operators';
import { catchError, of, timer, Subject } from 'rxjs';

@Component({
  selector: 'app-flipcharts',
  templateUrl: './flipcharts.component.html',
  styleUrls: ['./flipcharts.component.scss'],
})
export class FlipchartsComponent implements OnInit, OnDestroy {
  addingItem: boolean = false;

  typeOfChart: typeof chartType = chartType;

  meetingId: number = 1;
  private stopPolling = new Subject();

  constructor(
    public _chartStateService: ChartStateService,
    private _itemListService: ItemListService,
    private store: Store<State>,
    private pollingService: PollingService,
    private restService: RESTAPIServiceService
  ) {
    if (true) {
      //logged in
      this.itemList = pollingService.getAllItems();

      this.itemList.subscribe();
      /*timer(0, 3000)
        .pipe(tap(() => console.log('hllo')))
        .subscribe();*/
    }
  }

  itemList: Observable<Item[]>;

  ToggleInput() {
    this.addingItem = !this.addingItem;
  }

  ngOnInit(): void {
    this.itemList = this._itemListService.retrieveListFromStore();
  }

  ngOnDestroy(): void {
    this.pollingService.onDestroy();
  }
}
