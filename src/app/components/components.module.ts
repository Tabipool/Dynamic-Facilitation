import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header';
import { ItemComponent } from './item/item.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { AddButtonComponent } from './add-button/add-button.component';
import { ItemFlipchartComponent } from './item/item-flipchart/item-flipchart.component';
import { AddedItemComponent } from './added-item/added-item.component';
import { ChartComponent } from './chart/chart.component';
import { HomeviewButtonComponent } from './homeview-button/homeview-button.component';
import { HomeviewMeetingComponent } from './homeview-meeting/homeview-meeting.component';
import { ModeratorDetailedComponent } from './moderator-detailed/moderator-detailed.component';
import { ModeratorHomeviewComponent } from './moderator-homeview/moderator-homeview.component';
import { AddedIssueComponent } from './added-issue/added-issue.component';
import { ItemMenuComponent } from './item-menu/item-menu.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    ItemComponent,
    ItemMenuComponent,
    HeaderComponent,
    AddButtonComponent,
    ItemFlipchartComponent,
    AddedItemComponent,
    ChartComponent,
    HomeviewButtonComponent,
    HomeviewMeetingComponent,
    ModeratorDetailedComponent,
    ModeratorHomeviewComponent,
    AddedIssueComponent,
  ],
  imports: [
    CommonModule,
    DragDropModule,
    MatMenuModule,
    MatDialogModule,
    MatButtonToggleModule,
    MatButtonModule,
  ],
  exports: [
    ItemComponent,
    ItemMenuComponent,
    HeaderComponent,
    AddButtonComponent,
    AddedItemComponent,
    AddedIssueComponent,
    ItemFlipchartComponent,
    ChartComponent,
    HomeviewButtonComponent,
    HomeviewMeetingComponent,
    ModeratorHomeviewComponent,
  ],
})
export class ComponentsModule {}
