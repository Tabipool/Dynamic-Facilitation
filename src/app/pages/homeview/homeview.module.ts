import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeviewComponent } from './homeview.component';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsModule } from 'app/components/components.module';
import { RESTAPIServiceService } from 'app/service/restapiservice.service';

const routes: Routes = [{ path: '', component: HomeviewComponent }];

@NgModule({
  declarations: [HomeviewComponent],
  imports: [ComponentsModule, CommonModule, RouterModule.forChild(routes)],
  providers: [RESTAPIServiceService],
})
export class HomeviewModule {}
