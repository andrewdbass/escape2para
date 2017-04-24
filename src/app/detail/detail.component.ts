import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
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
  constructor() { }

  private toggleModal(){
    this.showModal = !this.showModal;
  }
  ngOnInit() {
  }

}
