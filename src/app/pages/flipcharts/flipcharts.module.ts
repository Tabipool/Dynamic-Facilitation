import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlipchartsComponent } from './flipcharts.component';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsModule } from 'app/components/components.module';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ItemMenuComponent } from '../../components/item-menu/item-menu.component';
import { PollingService } from 'app/service/polling.service';

const routes: Routes = [{ path: '', component: FlipchartsComponent }];

@NgModule({
  declarations: [FlipchartsComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule.forChild(routes),
    DragDropModule,
  ],
  entryComponents: [ItemMenuComponent],
  providers: [PollingService],
})
export class FlipchartsModule {}
