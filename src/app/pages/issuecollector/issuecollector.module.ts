import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IssuecollectorComponent } from './issuecollector.component';
import { ComponentsModule } from 'app/components/components.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: IssuecollectorComponent }];

@NgModule({
  declarations: [IssuecollectorComponent],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
})
export class IssuecollectorModule {}
