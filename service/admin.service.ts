import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }

  getWpName(){
    let url = 'http://localhost:8081/admins/wpByName/{name}';
    return this.http.get(url);
  }

  postWp(addon:any){
    let url = 'http://localhost:8081/admins/addWp';
    return this.http.post(url,addon,{responseType:'text' as 'json'})

  }

 updatewp(update:any){
  let url = 'http://localhost:8081/admins/updateWp/{id}';
  return this.http.post(url,update,{responseType:'text' as 'json'})
 }
 assignwasher(assign:any){
  let url = 'http://localhost:8081/admins/assignWasher';
  return this.http.post(url,assign,{responseType:'text' as 'json'})
 }

 delete(deletewp:any){
  return this.http.delete('http://localhost:8081/admins/deleteWp/${id}')
}
}
