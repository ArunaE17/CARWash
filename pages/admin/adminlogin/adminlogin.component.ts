import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AdminauthService } from 'src/app/service/adminauth.service';


@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  usermail:string="";
  password:any="";

  LoginForm= new FormGroup({
  usermail:new FormControl('',Validators.required),
  password:new FormControl('',[Validators.required,Validators.minLength(4)]),

  })
 constructor(private adminAuth:AdminauthService) { }

 ngOnInit(): void {
 }

 login(){
   this.adminAuth.authentication(this.usermail,this.password);
   console.log(this.usermail);
 }

}
