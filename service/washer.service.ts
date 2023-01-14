import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class WasherService {

  constructor(private http:HttpClient) { }
  getUnassignedOrders(){
    let url = 'http://localhost:8086/washers/findUnassigned'
    return this.http.get(url);
  }
}
