import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeviewComponent } from './homeview.component';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsModule } from 'app/components/components.module';

const routes: Routes = [{ path: '', component: HomeviewComponent }];

@NgModule({
  declarations: [HomeviewComponent],
  imports: [ComponentsModule, CommonModule, RouterModule.forChild(routes)],
})
export class HomeviewModule {}
