import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IssuecollectorComponent } from './issuecollector.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: IssuecollectorComponent }];

@NgModule({
  declarations: [IssuecollectorComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class IssuecollectorModule {}
