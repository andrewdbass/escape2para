import { Component, OnInit, HostListener } from '@angular/core';
import { Property } from "../property"
import { PropertyService } from "../property.service"
import {SafePipe} from '../safe.pipe';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  @HostListener('window:scroll', ['$event'])
  doSomething(event) {
    if(document.body.scrollTop>323){
      this.bookingStyle = ['booking', 'booking--fixed'];
    }
    else{
      this.bookingStyle = ['booking'];
    }
  }
  public bookingStyle = ["booking"];
  public showModal = false;
  public property: Property;
  public propertyLoaded = false
  lat: number = 51.678418;
  lng: number = 7.809007;
  constructor(private propertyService: PropertyService, private route: ActivatedRoute) {}

  public toggleModal(){
    this.showModal = !this.showModal;
  }
  ngOnInit() {
    this.route.params.subscribe(params => {
       let id = params['id'];
       this.propertyService.getProperty(id).subscribe((res
       )=>{
         console.log(res)
         this.property = res
         this.propertyLoaded = true
       })
    });
  }
}
