import { Component, OnInit } from '@angular/core';
import { ItemListService } from 'app/service/item-list.service';
import { ChartStateService } from 'app/state/chart-states/chart-states.service';
import { chartType } from '../../../types/chartType';
import { Store } from '@ngrx/store';
import { State } from 'app/state';
import { Item } from 'app/state/Items/item.states';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-flipcharts',
  templateUrl: './flipcharts.component.html',
  styleUrls: ['./flipcharts.component.scss'],
})
export class FlipchartsComponent implements OnInit {
  problem: any[] = [];
  info_data: any[] = [];
  thoughts: any[] = [];
  solutions: any[] = [];

  addingItem: boolean = false;

  typeOfChart: typeof chartType = chartType;

  constructor(
    public _chartStateService: ChartStateService,
    private _itemListService: ItemListService,
    private store: Store<State>
  ) {}

  itemList: Observable<Item[]>;

  ToggleInput() {
    this.addingItem = !this.addingItem;
  }

  ngOnInit(): void {
    this.itemList = this._itemListService.getItemList();
  }
}
