import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Flat } from '../models/flat';

@Injectable({
  providedIn: 'root'
})
export class FlatService {
  private baseUrl = 'http://localhost:9009/project/flatmng';

  constructor(private http: HttpClient) { }
 

  createFlat(flat:FormData): Observable<Object> {
   
    return this.http.post(`${this.baseUrl}`, flat);
  }
  getAll() {
   
    return this.http.get<Flat[]>(`${this.baseUrl}`);
  }
  deleteFlat(flatid:number){
   
    return this.http.delete(`${this.baseUrl}`+"/"+flatid)
  }
}