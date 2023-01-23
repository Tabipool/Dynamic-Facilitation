import {
  Component,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatMenu } from '@angular/material/menu';
import { Store } from '@ngrx/store';
import { ItemListService } from 'app/service/item-list.service';
import { State } from 'app/state';
import { Item } from 'app/state/Items/item.states';
import { Observable } from 'rxjs';
import { chartType } from 'types/chartType';
import {
  changeOfCourseAction,
  changeBookmarkAction,
  updateItemAction,
  deleteItemAction,
} from '../../../app/state/Items/item.actions';

@Component({
  selector: 'app-item-menu',
  templateUrl: './item-menu.component.html',
  styleUrls: ['./item-menu.component.scss'],
})
export class ItemMenuComponent implements OnInit {
  @ViewChild(MatMenu, { read: MatMenu }) menu: MatMenu;
  constructor(
    private _itemListService: ItemListService,
    private store: Store<State>
  ) {}

  itemList: Observable<Item[]>;

  ngOnInit(): void {
    this.itemList = this._itemListService.getItemList();
  }

  un_markOfCourse(item: Item) {
    this.store.dispatch(changeOfCourseAction({ item: item }));
  }

  un_markBookmark(item: Item) {
    this.store.dispatch(changeBookmarkAction({ item: item }));
  }

  editItem(item: Item) {}

  changeChartType(item: Item, newType: chartType) {
    item.type = newType;
    this.store.dispatch(updateItemAction({ item: item }));
  }

  deleteItem(item: Item) {
    this.store.dispatch(deleteItemAction({ id: item.number }));
  }

  changeColor(e: Event, item: Item) {
    let updatedItem = item;
    updatedItem.color = String((e.currentTarget as HTMLInputElement).id);
    //if random then execute get random color()
  }
}
