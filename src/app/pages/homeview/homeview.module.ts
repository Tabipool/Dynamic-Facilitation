import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeviewComponent } from './homeview.component';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsModule } from 'app/components/components.module';
import { RESTAPIServiceService } from 'app/service/restapiservice.service';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDialogModule } from '@angular/material/dialog';

const routes: Routes = [{ path: '', component: HomeviewComponent }];

@NgModule({
  declarations: [HomeviewComponent],
  imports: [
    ComponentsModule,
    CommonModule,
    RouterModule.forChild(routes),
    MatMenuModule,
    MatDialogModule,
    MatButtonToggleModule,
    MatButtonModule,
  ],
  providers: [RESTAPIServiceService],
})
export class HomeviewModule {}
