import { style } from '@angular/animations';
import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Item } from '../../state/Items/item.states';
import { ItemMenuComponent } from '../item-menu/item-menu.component';

@Component({
  selector: 'app-added-item',
  templateUrl: './added-item.component.html',
  styleUrls: ['./added-item.component.scss'],
})
export class AddedItemComponent implements OnInit {
  @Input() newItem: Item = new Item();
  @ViewChild('coloredStripe') shiftColor: ElementRef<HTMLDivElement>;
  @ViewChild(ItemMenuComponent) menu: ItemMenuComponent;

  editItem: boolean = false;

  color: string = this.newItem.color;

  constructor(private overlay: Overlay) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.shiftColor.nativeElement.style.setProperty(
      '$color',
      this.newItem.color.toString()
    );
    console.log(this.newItem.color);
  }

  openMenu(e: any) {
    const target = document.querySelector('.menu') as HTMLElement;
    const overlayRef = this.overlay.create({
      hasBackdrop: true,
      backdropClass: 'cdk-overlay-transparent-backdrop',
      panelClass: 'mat-elevation-z8',
      positionStrategy: this.overlay
        .position()
        .flexibleConnectedTo(target)
        .withPositions([
          {
            originX: 'center',
            originY: 'top',
            overlayX: 'start',
            overlayY: 'top',
            offsetX: 50,
          },
        ]),
    });
    const menuOverlay = new ComponentPortal(ItemMenuComponent);
    const componentRef = overlayRef.attach(menuOverlay);
    overlayRef.backdropClick().subscribe(() => overlayRef.detach());
    console.log(target);
  }
}
