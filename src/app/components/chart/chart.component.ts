import { Component, Input, OnInit } from '@angular/core';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Item } from '../../state/Items/item.states';
import { CounterService } from '../../state/counter/counter.service';
import { chartType } from '../../../types/chartType';
import { Store } from '@ngrx/store';
import { State } from 'app/state';
import {
  addItemAction,
  changeChartTypeItemAction,
} from '../../../app/state/Items/item.actions';
import { Observable } from 'rxjs';
import { ItemListService } from 'app/service/item-list.service';
import { AuthenticationService } from 'app/service/authentication/authentication.service';
import { RESTAPIServiceService } from 'app/service/restapiservice.service';
import { MeetingService } from 'app/state/meetings/meeting.service';
import { UserModel } from 'app/service/authentication/signInData';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent implements OnInit {
  constructor(
    public _counterService: CounterService,
    private _itemListService: ItemListService,
    private store: Store<State>,
    public authenticationService: AuthenticationService,
    public _restApiService: RESTAPIServiceService,
    private _meetingService: MeetingService,
    private auth: AuthenticationService
  ) {}
  addingItem: boolean = false;

  userInfo?: UserModel;

  itemList: Observable<Item[]>;

  @Input()
  title: string = '';

  @Input()
  chartsType: chartType;

  ToggleInput() {
    this.addingItem = !this.addingItem;
  }

  ngOnInit() {
    this.auth.userProfile.subscribe((data) => {
      this.userInfo = data;
    });
    this.itemList = this._itemListService.retrieveListFromStore();
    console.log('chart init');
  }

  cancelSubmit() {
    this.addingItem = false;
  }

  itemSubmit(item: { description: string; color: string }) {
    let newItem = new Item();
    this.addingItem = false;
    newItem.number = this._counterService.getValue();
    newItem.description = item.description;
    newItem.color = item.color;
    newItem.type = this.chartsType;

    this.store.dispatch(addItemAction({ item: newItem }));
    this._restApiService
      .postItem(newItem, this._meetingService.activeMeeting.id)
      .subscribe((error) => console.log(error));

    this._counterService.increase();
  }

  drop(event: CdkDragDrop<string[]>) {
    let itemNumber: number = +event.item.element.nativeElement
      .getElementsByClassName('counting-label')[0]
      .innerHTML.replace('.', '');
    if (event.previousContainer != event.container) {
      console.log(itemNumber);
      this.store.dispatch(
        changeChartTypeItemAction({
          number: itemNumber,
          newType: this.chartsType,
        })
      );
    } else {
    }
  }
}
