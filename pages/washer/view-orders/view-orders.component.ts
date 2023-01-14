import { Component, OnInit } from '@angular/core';
import { WasherService } from 'src/app/service/washer.service';

@Component({
  selector: 'app-view-orders',
  templateUrl: './view-orders.component.html',
  styleUrls: ['./view-orders.component.css']
})
export class ViewOrdersComponent implements OnInit {
ViewOrder:any=[];
array:any=[];
odr:any=[];
  constructor(private washer:WasherService){
    this.washer.getUnassignedOrders().subscribe(vo=>
      {this.ViewOrder=vo;
        this.array=vo;
    })
  } 

  ngOnInit(): void {
  }
hide(i:number){
  console.log(this.array);
  this.ViewOrder.splice(i,1);
}

}
