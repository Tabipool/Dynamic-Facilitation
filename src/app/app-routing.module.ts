import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './service/authentication/auth-guard';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    canActivate: [AuthGuard],
    data: {
      userType: 'non-logged-in',
    },
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/homeview').then((m) => m.HomeviewModule),
    canActivate: [AuthGuard],
    data: {
      userType: 'logged-in',
    },
  },
  {
    path: 'flipcharts',
    loadChildren: () =>
      import('./pages/flipcharts').then((m) => m.FlipchartsModule),
    canActivate: [AuthGuard],
    data: {
      userType: 'guest',
    },
  },
  {
    path: 'issuecollector',
    loadChildren: () =>
      import('./pages/issuecollector').then((m) => m.IssuecollectorModule),
    canActivate: [AuthGuard],
    data: {
      userType: 'guest',
    },
  },
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
