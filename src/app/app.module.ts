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
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { reducers, metaReducers } from './state';
import { FakeBackendProvider } from './fake-backend.interceptor';
import { MeetingService } from './state/meetings/meeting.service';
import { ColorService } from './state/color-state/color-state.service';
import { AuthGuard } from './service/authentication/auth-guard';
import { AuthInterceptor } from './service/authentication/auth.interceptor';

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
  providers: [
    CounterService,
    ChartStateService,
    FakeBackendProvider,
    MeetingService,
    ColorService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
