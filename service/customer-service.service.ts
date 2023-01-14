import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {

  constructor(private http:HttpClient) { }
  getAllWp(){
    let url ='http://localhost:8082/users/seeWp';
    return this.http.get(url);
  }
  getAllRatings(){
    let url ='http://localhost:8082/users/getAllRatings';
    return this.http.get(url);
  }
  getReciept(){
    let url ='http://localhost:8086/users/getReceipt/${id}';
    return this.http.get(url);

  }



  postRating(rating:any){
    return this.http.post('http://localhost:8086/users/addRating',rating,{responseType:'text' as 'json'})
  }

  postOrder(order:any){
    return this.http.post('http://localhost:8086/users/addOrder',order,{responseType:'text' as 'json'})
  }
  delete(deleteorder:any){
    return this.http.delete('http://localhost:8086/users/cancelOrder')
  }

}
