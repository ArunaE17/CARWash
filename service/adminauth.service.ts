import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AdminauthService {

  adminName:string='';
  message:any='';
  admin:any='';
  rdata:any;
  constructor(private http:HttpClient, private router:Router) { }

  register(user:any){
    this.rdata = this.http.post("http://localhost:8081/adminauth/register",user,{responseType:'text' as 'json'});
    console.log(this.rdata);
    return this.rdata;
   }
   
  authentication(email:string,password:string){
    return this.http.post("http://localhost:8081/adminauth/login",{email:email,password:password})
    
    .pipe((catchError((err:HttpErrorResponse)=>{
      Swal.fire({
            icon: 'error',
            title: 'Oops...!!',
            text: 'Invalid Credentials or UserMail!'
      })
      this.router.navigate(['/adminlogin']);
      return throwError("server Error")
    })))
    .subscribe(
      (userData:any)=>{
        this.admin=userData;
        console.log(this.admin);
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
        this.router.navigate(['admin']);
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
      getAdminEmail(){
        return sessionStorage.getItem("email");
      }
      getAdmin(name:String){
        this.admin.fullname=name;
        console.log(this.admin.fullname);
        return this.admin;
      }
      getAdminName(){
        return sessionStorage.getItem('fullname');
      }
      getAdminId(){
        return sessionStorage.getItem('id');
      }
    }
      
         
      
    
  













