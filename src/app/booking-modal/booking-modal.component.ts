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
  @Input() property: Property;

  constructor(private propertyService: PropertyService) {}

  public today = new Date();
  public arrivalDate: Date;
  public departureDate: Date;
  public guests: number;
  public days = 0;
  public ready = false;
  public dailyRate = 155;
  public serviceFee = 99;
  public total = 0
  public unavailable_dates=[];
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
    // location.reload();
  }
  public createBooking(){
    let booking = {
        prop: this.property.id,
        start_date: this.arrivalDate.toISOString(),
        end_date: this.departureDate.toISOString(),
        customer_email: "test@email.com"
    }

    this.propertyService.createBooking(booking).subscribe((res)=>{
      console.log(res)
      this.toggleModal()
    })
    console.log("called")
  }
  ngOnInit() {
    for(let date of this.property.unavailable_dates){
        this.unavailable_dates.push(new Date(date.date))
    }
  }


}
