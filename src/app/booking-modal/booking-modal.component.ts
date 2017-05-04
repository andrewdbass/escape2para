import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Property } from "../property"
import { PropertyService } from "../property.service"

@Component({
  selector: 'app-booking-modal',
  templateUrl: './booking-modal.component.html',
  styleUrls: ['./booking-modal.component.css']
})
export class BookingModalComponent implements OnInit {
  @Output() closeModal = new EventEmitter<boolean>()
  constructor() { }
  @Input() property: Property;
  public today = new Date();
  public arrivalDate: Date;
  public departureDate: Date;
  public guests: number;
  public days = 0;
  public ready = false;
  public dailyRate = 155;
  public serviceFee = 99;
  public total = 0
  public dates= [];
  public onChange($event){
    if (typeof this.guests != 'undefined' && typeof this.arrivalDate != 'undefined' && typeof this.departureDate != 'undefined'){
      let timeDiff = Math.abs(this.arrivalDate.getTime() - this.departureDate.getTime());
      this.days = Math.ceil(timeDiff / (1000 * 3600 * 24))
      this.total = this.days * this.dailyRate + this.serviceFee
      this.ready = true;
    }
  }
  public toggleModal(){
    this.closeModal.emit(true)
  }
  ngOnInit() {
    this.dates.push(new Date(this.property.unavailable_dates[0].date))
    console.log(this.dates)
  }

}
