import { Component, OnInit } from '@angular/core';
import {CalendarModule} from 'primeng/primeng';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: [
    './list.component.css',
  ],
})
export class ListComponent implements OnInit {

  constructor() { }
  public today = new Date();
  public arrivalDate: Date;
  public departureDate: Date;
  ngOnInit() {
  }

}
