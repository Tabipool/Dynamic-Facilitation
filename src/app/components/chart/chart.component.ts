import { Component, Input, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Item } from '../../state/Items/item.states';
import { CounterService } from '../../state/counter/counter.service';
import { chartType } from '../../../types/chartType';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent implements OnInit {
  constructor(public _counterService: CounterService) {}
  addingItem: boolean = false;

  items: Item[] = [];

  @Input()
  title: string = '';

  @Input()
  chartsType: chartType;

  ToggleInput() {
    this.addingItem = !this.addingItem;
  }

  ngOnInit() {}

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

    this.items.push(newItem);

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
