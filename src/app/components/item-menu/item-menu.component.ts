import { Component, HostBinding, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-menu',
  templateUrl: './item-menu.component.html',
  styleUrls: ['./item-menu.component.scss'],
})
export class ItemMenuComponent implements OnInit {
  @HostBinding('style.top') y = '35px';
  @HostBinding('style.left') x = '35px';
  @HostBinding('style.visibility') visibility = 'hidden';

  constructor() {}

  ngOnInit(): void {}

  open(e: MouseEvent) {
    this.visibility = 'visible';

    e.stopPropagation();
  }

  deleteItem() {
    this.close();
    console.log('löschen');
  }

  close() {
    this.visibility = 'hidden';
  }

  @HostListener('document:click')
  public onDocumentClick() {
    if (this.visibility === 'visible') {
      this.close();
    }
  }
}
