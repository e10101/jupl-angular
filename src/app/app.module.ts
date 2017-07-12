import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';

import { Router } from '@angular/router';

import { DevicesModule } from './devices/devices.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { DevicesComponent } from './devices/devices.component';
import { PageNotFoundComponent } from './not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    DevicesModule,
    AppRoutingModule,
    HttpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
