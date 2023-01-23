import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from './components/components.module';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { OverlayModule } from '@angular/cdk/overlay';
import { CounterService } from './state/counter/counter.service';
import { ChartStateService } from './state/chart-states/chart-states.service';
import { HttpClientModule } from '@angular/common/http';
import { reducers, metaReducers } from './state';
import { FakeBackendProvider } from './fake-backend.interceptor';

//import { MatMenuModule } from '@angular/material';

@NgModule({
  declarations: [AppComponent, LoginComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ComponentsModule,
    DragDropModule,
    HttpClientModule,
    OverlayModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      },
    }),
  ],
  providers: [CounterService, ChartStateService, FakeBackendProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}
