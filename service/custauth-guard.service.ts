import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CustomerAuthService } from './customer-auth.service';

@Injectable({
  providedIn: 'root'
})
export class CustauthGuardService {

  constructor(private router: Router,private authService:CustomerAuthService) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if(this.authService.isLoggedIn()){
      return true;
    }
      
else{
    this.router.navigate(['']);
    return false;
}
  }
}
