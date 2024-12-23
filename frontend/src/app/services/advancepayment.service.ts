import { Injectable } from '@angular/core';
import { Advancepayment } from '../models/advancepayment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdvancePaymentService {
  private serverurl ="http://localhost:9009/advancepayment"

  constructor(private http:HttpClient) { }
  advancepatmentsave(ap:Advancepayment):Observable<Advancepayment>
  {
    return this.http.post<Advancepayment>(this.serverurl+"/addadvancepayment",ap)
  }
  getalladvancepayment():Observable<Advancepayment[]>
  {
    return this.http.get<Advancepayment[]>(this.serverurl+"/advancepayments")
  }
}