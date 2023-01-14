import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomerAuthService } from 'src/app/service/customer-auth.service';

@Component({
  selector: 'app-cuslogin',
  templateUrl: './cuslogin.component.html',
  styleUrls: ['./cuslogin.component.css']
})
export class CusloginComponent implements OnInit {
   usermail:string="";
   password:any="";

   LoginForm= new FormGroup({
   usermail:new FormControl('',Validators.required),
   password:new FormControl('',[Validators.required,Validators.minLength(4)]),

   })
  constructor(private customerAuth:CustomerAuthService) { }

  ngOnInit(): void {
  }

  login(){
    this.customerAuth.authentication(this.usermail,this.password);
    console.log(this.usermail);
  }

}
