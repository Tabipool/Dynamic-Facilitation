import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeviewComponent } from './pages/homeview';
import { FlipchartsComponent } from './pages/flipcharts';
import { IssuecollectorComponent } from './pages/issuecollector';

const routes: Routes = [
  { path: '', component: HomeviewComponent },
  { path: 'flipcharts', component: FlipchartsComponent },
  { path: 'issuecollector', component: IssuecollectorComponent },
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
