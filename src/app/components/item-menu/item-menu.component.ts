import {
  Component,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { MatMenu } from '@angular/material/menu';
import { Store } from '@ngrx/store';
import { ItemListService } from 'app/service/item-list.service';
import { RESTAPIServiceService } from 'app/service/restapiservice.service';
import { State } from 'app/state';
import { Item } from 'app/state/Items/item.states';
import { MeetingService } from 'app/state/meetings/meeting.service';
import { Observable } from 'rxjs';
import { chartType } from 'types/chartType';
import {
  changeOfCourseAction,
  changeBookmarkAction,
  updateItemAction,
  deleteItemAction,
  changeChartTypeItemAction,
} from '../../../app/state/Items/item.actions';

@Component({
  selector: 'app-item-menu',
  templateUrl: './item-menu.component.html',
  styleUrls: ['./item-menu.component.scss'],
})
export class ItemMenuComponent implements OnInit {
  @ViewChild(MatMenu, { read: MatMenu }) menu: MatMenu;
  @Output() editItemEvent = new EventEmitter<string>();
  constructor(
    private _itemListService: ItemListService,
    private store: Store<State>,
    private _restApiService: RESTAPIServiceService,
    public _meetingService: MeetingService
  ) {}

  itemList: Observable<Item[]>;

  typeOfChart: typeof chartType = chartType;

  ngOnInit(): void {
    this.itemList = this._itemListService.getItemList();
  }

  un_markOfCourse(item: Item) {
    this.store.dispatch(changeOfCourseAction({ item: item }));
    item.ofCourse = !item.ofCourse;
    this._restApiService
      .putItem(item, this._meetingService.activeMeeting.id)
      .subscribe((error) => console.log(error));
  }

  un_markBookmark(item: Item) {
    this.store.dispatch(changeBookmarkAction({ item: item }));
    item.bookmark = !item.bookmark;
    this._restApiService
      .putItem(item, this._meetingService.activeMeeting.id)
      .subscribe((error) => console.log(error));
  }

  editItem() {
    this.editItemEvent.emit();
  }

  changeChartType(item: Item, newType: chartType) {
    this.store.dispatch(
      changeChartTypeItemAction({ number: item.number, newType: newType })
    );

    this._restApiService
      .putItem(item, this._meetingService.activeMeeting.id)
      .subscribe((error) => console.log(error));
  }

  deleteItem(item: Item) {
    this._restApiService
      .deleteItem(item.number, this._meetingService.activeMeeting.id)
      .subscribe((error) => console.log(error));
    this.store.dispatch(deleteItemAction({ id: item.number }));
  }

  changeColor(e: Event, item: Item) {
    let updatedItem: Item = {
      number: item.number,
      description: item.description,
      color: String((e.currentTarget as HTMLInputElement).id),
      type: item.type,
      bookmark: item.bookmark,
      ofCourse: item.ofCourse,
    };
    this._restApiService
      .putItem(updatedItem, this._meetingService.activeMeeting.id)
      .subscribe((error) => console.log(error));
    this.store.dispatch(updateItemAction({ item: updatedItem }));
    //if random then execute get random color()
  }
}
