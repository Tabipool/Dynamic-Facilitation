import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header';
import { ItemComponent } from './item/item.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { AddButtonComponent } from './add-button/add-button.component';
import { ItemFlipchartComponent } from './item/item-flipchart/item-flipchart.component';
import { AddedItemComponent } from './added-item/added-item.component';
import { ChartComponent } from './chart/chart.component';
import { ItemMenuComponent } from './item-menu/item-menu.component';
import { HomeviewButtonComponent } from './homeview-button/homeview-button.component';
import { HomeviewMeetingComponent } from './homeview-meeting/homeview-meeting.component';
import { ModeratorDetailedComponent } from './moderator-detailed/moderator-detailed.component';
import { ModeratorHomeviewComponent } from './moderator-homeview/moderator-homeview.component';

@NgModule({
  declarations: [
    ItemComponent,
    HeaderComponent,
    AddButtonComponent,
    ItemFlipchartComponent,
    AddedItemComponent,
    ChartComponent,
    ItemMenuComponent,
    HomeviewButtonComponent,
    HomeviewMeetingComponent,
    ModeratorDetailedComponent,
    ModeratorHomeviewComponent,
  ],
  imports: [CommonModule, DragDropModule],
  exports: [
    ItemComponent,
    HeaderComponent,
    AddButtonComponent,
    AddedItemComponent,
    ItemFlipchartComponent,
    ChartComponent,
    HomeviewButtonComponent,
    HomeviewMeetingComponent,
    ItemMenuComponent,
  ],
})
export class ComponentsModule {}
