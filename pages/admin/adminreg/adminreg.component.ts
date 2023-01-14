import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { AdminauthService } from 'src/app/service/adminauth.service';
import { CustomerAuthService } from 'src/app/service/customer-auth.service';
import Swal from 'sweetalert2';
import { AdminDetails } from './adminreg';

@Component({
  selector: 'app-adminreg',
  templateUrl: './adminreg.component.html',
  styleUrls: ['./adminreg.component.css']
})
export class AdminregComponent implements OnInit {

  adminDetails:AdminDetails={
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
  constructor(private adminauth:AdminauthService,private router:Router) { }

 
  
  ngOnInit(): void {
  }
  registerNow(){
    console.log("inside registernow")
    console.log(this.adminDetails)
    let res = this.adminauth.register(this.adminDetails)
    .pipe(catchError((err:HttpErrorResponse)=>{
      Swal.fire({
            icon: 'error',
            title: 'Oops...!!',
            text: 'something went wrong try again'
      })
      this.router.navigate(['/adminreg']);
      return throwError("server Error")
    }))

    .subscribe((data:any)=>{this.message=data ; console.log("inside registernow")})
      

    Swal.fire({
      position:'center',
      icon:'success',
      showConfirmButton:false,
      timer:2000
    })
    this.router.navigate(['/adminlogin']);
    console.group(this.message);
    
  }
}
