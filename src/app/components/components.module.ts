import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header';
import { ItemComponent } from './item/item.component';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [ItemComponent, HeaderComponent],
  imports: [CommonModule, DragDropModule],
  exports: [ItemComponent, HeaderComponent],
})
export class ComponentsModule {}
