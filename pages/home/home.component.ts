import { Component, OnInit } from '@angular/core';
import { WashpackDetailsService } from 'src/app/service/washpack-details.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isLoggedIn=false;

  constructor(private service:WashpackDetailsService) { }
  washPack:any;

  ngOnInit(): void {
    this.washPack=this.service.washPack;
  }

}
