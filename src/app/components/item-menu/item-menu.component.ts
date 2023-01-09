import {
  Component,
  HostBinding,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';
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
} from '../../../app/state/Items/item.actions';

@Component({
  selector: 'app-item-menu',
  templateUrl: './item-menu.component.html',
  styleUrls: ['./item-menu.component.scss'],
})
export class ItemMenuComponent implements OnInit {
  constructor(
    private _itemListService: ItemListService,
    private store: Store<State>
  ) {}

  itemList: Observable<Item[]>;

  @Input() item: Item;

  ngOnInit(): void {
    this.itemList = this._itemListService.getItemList();
  }

  un_markOfCourse() {
    this.store.dispatch(changeOfCourseAction({ item: this.item }));
  }

  un_markBookmark() {
    this.store.dispatch(changeBookmarkAction({ item: this.item }));
  }

  editItem() {}

  changeChartType(newType: chartType) {
    this.item.type = newType;
    this.store.dispatch(updateItemAction({ item: this.item }));
  }

  deleteItem() {
    this.close();
    console.log('löschen');
  }

  close() {}
}
