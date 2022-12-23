import { Component, HostBinding, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-menu',
  templateUrl: './item-menu.component.html',
  styleUrls: ['./item-menu.component.scss'],
})
export class ItemMenuComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  deleteItem() {
    this.close();
    console.log('löschen');
  }

  close() {}
}
