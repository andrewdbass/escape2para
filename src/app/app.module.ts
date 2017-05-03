import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';

import { RouterModule, Routes } from '@angular/router';

import {CalendarModule} from 'primeng/primeng';
import {GalleriaModule} from 'primeng/primeng';

import { CarouselModule } from 'ngx-bootstrap/carousel';

import { BookingModalComponent } from './booking-modal/booking-modal.component';

import { PropertyService } from "./property.service"

const GoogleAPIKey = "AIzaSyDNWO6s6HKZiArAdVuCylCLD0LEEmarHc4"
import { AgmCoreModule } from 'angular2-google-maps/core';

import {SafePipe} from './safe.pipe';

const appRoutes: Routes = [
  {
    path: 'property',
    component: DetailComponent
  },
  {
    path: '',
    component: ListComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    DetailComponent,
    BookingModalComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    CalendarModule,
    GalleriaModule,
    CarouselModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyDNWO6s6HKZiArAdVuCylCLD0LEEmarHc4"
    })
  ],
  providers: [
    PropertyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
