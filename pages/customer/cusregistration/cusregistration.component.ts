import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { CustomerAuthService } from 'src/app/service/customer-auth.service';
import Swal from 'sweetalert2';
import { CustomerDetails } from './customerdetails';

@Component({
  selector: 'app-cusregistration',
  templateUrl: './cusregistration.component.html',
  styleUrls: ['./cusregistration.component.css']
})
export class CusregistrationComponent implements OnInit {
  
  customerDetails:CustomerDetails={
    fullname: "", email: "", password: "", 
   
    
  }
  data:any;
  message:any;
  status:any;
  RegistrationForm = new FormGroup({
    fullname:new FormControl('',Validators.required),
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.minLength(8)]),
   
   
  })
  constructor(private customerauth:CustomerAuthService,private router:Router) { }

 
  
  ngOnInit(): void {
  }
  registerNow(){
    console.log("inside registernow")
    console.log(this.customerDetails)
    let res = this.customerauth.register(this.customerDetails)
    .pipe(catchError((err:HttpErrorResponse)=>{
      Swal.fire({
            icon: 'error',
            title: 'Oops...!!',
            text: 'something went wrong try again'
      })
      this.router.navigate(['/creg']);
      return throwError("server Error")
    }))

    .subscribe((data:any)=>{this.message=data ; console.log("inside registernow")})
      

    Swal.fire({
      position:'center',
      icon:'success',
      showConfirmButton:false,
      timer:2000
    })
    this.router.navigate(['/clogin']);
    console.group(this.message);
    
  }
}
