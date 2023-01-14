import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WashpackDetailsService {
//x:any;
  
  constructor(private http:HttpClient) { }
  getWashPack(){
    let url = 'http://localhost:8081/admins/findallWp';
    return this.http.get(url);
  }
  
  
  //wash packs
washPack=[

  {
    id:1,
    name:"pack1",
    cost:100,
    description:"good pack",
    CarImg:"https://ceramicpro.com/wp-content/uploads/2020/04/BMW-Tandem-800x500.jpg"

  },
  {
    id:2,
    name:"pack2",
    cost:200,
    description:"good pack",
    CarImg:"https://images.unsplash.com/photo-1505761283622-7fe50142c97f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"

  },
  {
    id:3,
    name:"pack3",
    cost:1000,
    description:"good pack",
    CarImg:"https://www.collisonmotoringservices.co.uk/wp-content/uploads/2016/08/Car-Wash.jpg"

  },
  {
    id:4,
    name:"pack4",
    cost:800,
    description:"good pack",
    CarImg:"https://tse3.mm.bing.net/th?id=OIP.7kZc3uNwfJmEgjbRQI5--AHaFL&pid=Api&P=0"

  },
  {
    id:5,
    name:"pack5",
    cost:900,
    description:"good pack",
    CarImg:"https://www.rd.com/wp-content/uploads/2019/07/car-wash-1024x683.jpg"

  }
]
 }
