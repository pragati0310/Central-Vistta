import { Injectable } from '@angular/core';
import { Booking } from '../models/booking';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  getAll() {
    throw new Error('Method not implemented.');
  }
  private serverurl ="http://localhost:9009/booking"

  constructor(private http:HttpClient) { }
  bookingsave(bk:Booking):Observable<Booking>
  {
    return this.http.post<Booking>(this.serverurl+"/addbook",bk)
  }
  getallbooking():Observable<Booking[]>
  {
    return this.http.get<Booking[]>(this.serverurl+"/bookings")
  }
}
