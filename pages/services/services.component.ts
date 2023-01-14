import { Component, OnInit } from '@angular/core';
import { WashpackDetailsService } from 'src/app/service/washpack-details.service';
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  WashPack:any=[];

  constructor(private service:WashpackDetailsService) { 
    this.service.getWashPack().subscribe(wpd=>{
      this.WashPack=wpd;
    })
  }
  
  washPack:any;
  ngOnInit(): void {
    this.washPack=this.service.washPack;
    
  }

}
