import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class CustomerAuthService {
  customerName:string='';
  message:any='';
  customer:any='';
  rdata:any;
  constructor(private http:HttpClient, private router:Router) { }

  register(user:any){
    this.rdata = this.http.post("http://localhost:8082/auth/register",user,{responseType:'text' as 'json'});
    console.log(this.rdata);
    return this.rdata;
   }
   
  authentication(email:string,password:string){
    return this.http.post("http://localhost:8082/auth/login",{email:email,password:password})
    
    .pipe((catchError((err:HttpErrorResponse)=>{
      Swal.fire({
            icon: 'error',
            title: 'Oops...!!',
            text: 'Invalid Credentials or UserMail!'
      })
      this.router.navigate(['/clogin']);
      return throwError("server Error")
    })))
    .subscribe(
      (userData:any)=>{
        this.customer=userData;
        console.log(this.customer);
        console.log(userData.email);
        console.log(userData.password);
        console.log(userData.token);
        console.log(userData.fullname);
        console.log(userData.roles);
        console.log(userData.id);
        sessionStorage.setItem('email',email);
        let token="Bearer"+userData.token;
        sessionStorage.setItem('token',token);
        console.log(token);
        sessionStorage.setItem('id',userData.id);
        sessionStorage.setItem('fullname',userData.fullname);
        sessionStorage.setItem('roles',userData.roles);
        console.log(sessionStorage.getItem('email'));
        console.log(sessionStorage.getItem('id'));
        console.log(sessionStorage.getItem('token'));
        console.log(sessionStorage.getItem('fullname'));
        console.log(sessionStorage.getItem('roles'));
        this.router.navigate(['customer']);
      });
    }

   

      isLoggedIn(){
        let user = sessionStorage.getItem('email');
        let token=sessionStorage.getItem("token");
        if(token==undefined|| token==null||token==''){
          return false;
        }
        else{
          return true;
        }

      }

      logout(){
        sessionStorage.clear();
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("email");
        sessionStorage.removeItem("id");
        sessionStorage.removeItem("fullname");
        sessionStorage.removeItem("roles");
        this.router.navigate(['']);

      }
      getCustomerEmail(){
        return sessionStorage.getItem("email");
      }
      getUser(name:String){
        this.customer.fullname=name;
        console.log(this.customer.fullname);
        return this.customer;
      }
      getCustomerName(){
        return sessionStorage.getItem('fullname');
      }
      getCustomerId(){
        return sessionStorage.getItem('id');
      }
    }
      
         
      
    
  























    

    
    //   (userData:any)=>{
    //     if(userData.response=="No"){
    //       Swal.fire({
    //         icon: 'error',
    //         title: 'Oops...',
    //         text: 'User already exists!',

    //       })
    //       this.router.navigate(['/creg']);
    //     }
    //     else{
    //       localStorage.setItem('fullname',fullname);
    //       let token= "Bearer "+userData.response;
    //       localStorage.setItem('token',token);
    //       console.log(token);
    //       localStorage.getItem('fullname');
    //       this.router.navigate(['customer']);
    //       console.log(sessionStorage);
    //     }

    //   }
    // );
  // }

  // getCustomerName(){
  //   return this.customerName = localStorage['fullname'];
  // }
  

  // isLoggedIn(){
  //   let user= localStorage.getItem('fullname');
  //   console.log(user);
    
  //   return !(user==null);
  // }
  // logout(){
  //   console.log(localStorage);
  //   window.localStorage.clear();
  //   console.log(localStorage);
  // }
    
  
