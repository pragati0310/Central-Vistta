import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Booking } from '../models/booking';
import { BookingService } from '../services/booking.service';


@Component({
  selector: 'app-booking',
  imports: [FormsModule],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css'
})
export class BookingComponent implements OnInit {
 
 bk:Booking=new Booking()
  constructor(private route:ActivatedRoute,private bkserv:BookingService)
  {

  }
ngOnInit(): void {
    this.bk.flatid=this.route.snapshot.params['id']
    
}
submitdata()
{

  this.bk.emailid=localStorage.getItem("emailid")
this.bkserv.bookingsave(this.bk).subscribe(data=>{
  if(data!=null)
    alert("Thank you for booking")
})
}
}