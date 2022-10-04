import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeviewComponent } from './homeview.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: HomeviewComponent }];

@NgModule({
  declarations: [HomeviewComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class HomeviewModule {}
