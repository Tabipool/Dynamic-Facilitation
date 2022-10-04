import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/homeview').then((m) => m.HomeviewModule),
  },
  {
    path: 'flipcharts',
    loadChildren: () =>
      import('./pages/flipcharts').then((m) => m.FlipchartsModule),
  },
  {
    path: 'issuecollector',
    loadChildren: () =>
      import('./pages/issuecollector').then((m) => m.IssuecollectorModule),
  },
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
