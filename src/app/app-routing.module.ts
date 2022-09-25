import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeviewComponent } from './pages/homeview';
import { FlipchartsComponent } from './pages/flipcharts';
import { IssuecollectorComponent } from './pages/issuecollector';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeviewComponent },
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
