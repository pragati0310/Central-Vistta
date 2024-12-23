import { Component, OnInit } from '@angular/core';
import { Advancepayment } from '../models/advancepayment';
import { ActivatedRoute } from '@angular/router';
import { AdvancePaymentService } from '../services/advancepayment.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-advancepayment',
  imports: [CommonModule,FormsModule],
  templateUrl: './advancepayment.component.html',
  styleUrl: './advancepayment.component.css'
})
export class AdvancepaymentComponent implements OnInit{
  
    ap:Advancepayment=new Advancepayment()
      constructor(private route:ActivatedRoute,private apserv:AdvancePaymentService)
      {
    
      }
    ngOnInit(): void {
        this.ap.paymentid=this.route.snapshot.params['id']
        
    }
    submitdata()
    {
    
      this.ap.emailid=localStorage.getItem("emailid")
    this.apserv.advancepatmentsave(this.ap).subscribe(data=>{
      if(data!=null)
        alert("Thank you for Advance Payment")
    })
    }
    }
    

