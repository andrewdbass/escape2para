import { Component, OnInit } from '@angular/core';
import {CalendarModule} from 'primeng/primeng';

import { Property } from "../property"
import { PropertyService } from "../property.service"

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: [
    './list.component.css',
  ],
})
export class ListComponent implements OnInit {

  constructor(private propertyService: PropertyService) {}
  public today = new Date();
  public arrivalDate: Date;
  public departureDate: Date;
  public properties: Property[]
  ngOnInit() {
    this.propertyService.getProperties().subscribe((res)=>{
      this.properties = res
      console.log(this.properties)
    })
  }
  search() {
    this.propertyService.getProperties(this.arrivalDate.toISOString(), this.departureDate.toISOString()).subscribe((res)=>{
      this.properties = res
      console.log(this.properties)
    })
  }

}
