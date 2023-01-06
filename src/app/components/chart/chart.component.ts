import { Component, Input, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Item } from '../../state/Items/item.states';
import { CounterService } from '../../state/counter/counter.service';
import { chartType } from '../../../types/chartType';
import { Store } from '@ngrx/store';
import { State } from 'app/state';
import { addItemAction } from '../../../app/state/Items/item.actions';
import { Observable } from 'rxjs';
import { ItemListService } from 'app/service/item-list.service';
import { AuthenticationService } from 'app/service/authentication/authentication.service';

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
    public authenticationService: AuthenticationService
  ) {}
  addingItem: boolean = false;

  itemList: Observable<Item[]>;

  @Input()
  title: string = '';

  @Input()
  chartsType: chartType;

  ToggleInput() {
    this.addingItem = !this.addingItem;
  }

  ngOnInit() {
    this.itemList = this._itemListService.getItemList();
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
    console.log(newItem);

    this._counterService.increase();
  }

  /*drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }

    console.log(this.addingItem);
  }*/
}
