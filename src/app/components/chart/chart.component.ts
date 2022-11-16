import { Component, Input, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Item } from 'types/Item';
import { CounterService } from '../../state/counter/counter.service';

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

    this.items.push(newItem);

    //console.log(this.counterService.getValue());
    console.log(item);
    console.log(newItem);
    console.log(this.items);
    //this.newItem.type =

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
