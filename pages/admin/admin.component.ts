import { Component, OnInit } from '@angular/core';
import { AdminauthService } from 'src/app/service/adminauth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  constructor(private adminauth:AdminauthService) { }

  ngOnInit(): void {
  }
  logout(){
    this.adminauth.logout();
    
  }
}