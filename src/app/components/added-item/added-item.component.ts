import { style } from '@angular/animations';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Item } from '../../state/Items/Item.states';

@Component({
  selector: 'app-added-item',
  templateUrl: './added-item.component.html',
  styleUrls: ['./added-item.component.scss'],
})
export class AddedItemComponent implements OnInit {
  @Input() newItem: Item = new Item();
  @ViewChild('coloredStripe') shiftColor: ElementRef<HTMLDivElement>;

  editItem: boolean = false;

  color: string = this.newItem.color;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.shiftColor.nativeElement.style.setProperty(
      '$color',
      this.newItem.color.toString()
    );
    console.log(this.newItem.color);
  }

  OpenMenu() {
    console.log('hello');
  }
}
