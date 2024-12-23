import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Flat } from '../models/flat';
import { CommonModule } from '@angular/common';
import { FlatService } from '../services/flat.service';


@Component({
  selector: 'app-flat',
  imports: [CommonModule],
  templateUrl: './flat.component.html',
  styleUrl: './flat.component.css'
})
export class FlatComponent  implements OnInit {
  flat:Flat[]=[]
login=false
 constructor(private flatService:FlatService,private router:Router){

 }
 getAllFlat()
 {

   this.flatService.getAll().subscribe((response:Flat[])=>{
     console.log(response)
     this.flat=response
   },
   
   (error:HttpErrorResponse)=>{
     console.log(error)
    });
 }
 ngOnInit(): void {
   this.getAllFlat()
   console.log(localStorage.getItem("emailid"))
   if(localStorage.getItem("emailid")!=null)
    this.login=true
 }

booking(id:any)
{
this.router.navigate(["/booking",id])
}
}