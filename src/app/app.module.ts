import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeviewComponent } from './pages/homeview';
import { FlipchartsComponent } from './pages/flipcharts';
import { AppRoutingModule } from './app-routing.module';
import { IssuecollectorComponent } from './pages/issuecollector/issuecollector.component';
import { HeaderComponent } from './components/header';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FlipchartsComponent,
    HomeviewComponent,
    IssuecollectorComponent,
    HeaderComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
