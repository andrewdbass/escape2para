import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';

import { RouterModule, Routes } from '@angular/router';

import {CalendarModule} from 'primeng/primeng';
import { BookingModalComponent } from './booking-modal/booking-modal.component';

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
    BookingModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    CalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
