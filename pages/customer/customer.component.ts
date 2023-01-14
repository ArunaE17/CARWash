import { Component, OnInit } from '@angular/core';
import { CustomerAuthService } from 'src/app/service/customer-auth.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor(private auth:CustomerAuthService) { }

  ngOnInit(): void {
  }
  logout(){
    this.auth.logout();
    
  }
}
