import { Component, Input, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Item } from 'types/Item';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent implements OnInit {
  addingItem: boolean = false;

  counter: number = 1;
  items: Item[] = [];

  @Input()
  title: string = '';

  constructor() {}

  ToggleInput() {
    this.addingItem = !this.addingItem;
  }

  ngOnInit(): void {}

  cancelSubmit() {
    this.addingItem = false;
  }

  itemSubmit(item: { description: string; color: string }) {
    let newItem = new Item();
    this.addingItem = false;
    newItem.number = this.counter;
    newItem.description = item.description;
    newItem.color = item.color;

    this.items.push(newItem);

    console.log(this.counter);
    console.log(item);
    console.log(newItem);
    console.log(this.items);
    //this.newItem.type =

    this.counter++;
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
