import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { AddaddonsComponent } from './pages/admin/addaddons/addaddons.component';
import { AdminComponent } from './pages/admin/admin.component';
import { CustomerComponent } from './pages/customer/customer.component';
import { HomeComponent } from './pages/home/home.component';
import { ServicesComponent } from './pages/services/services.component';
import { ViewOrdersComponent } from './pages/washer/view-orders/view-orders.component';
import { WasherComponent } from './pages/washer/washer.component';
import { LoginComponent } from './sharedpages/login/login.component';
import { RegistrationComponent } from './sharedpages/registration/registration.component';
import { CusloginComponent } from './pages/customer/cuslogin/cuslogin.component';
import { CusregistrationComponent } from './pages/customer/cusregistration/cusregistration.component';
import { UpdatewpComponent } from './pages/admin/updatewp/updatewp.component';
import { DeletewpComponent } from './pages/admin/deletewp/deletewp.component';
import{CustauthGuardService} from './service/custauth-guard.service'
import { AdminregComponent } from './pages/admin/adminreg/adminreg.component';
import { AdminloginComponent } from './pages/admin/adminlogin/adminlogin.component';
import { AdminGuard } from './service/admin.guard';
const routes: Routes = [

  {path:'',component:HomeComponent},
  {path:'service',component:ServicesComponent},


  {path:'admin',component:AdminComponent,canActivate:[AdminGuard]},
  {path:'adminreg',component:AdminregComponent},
  {path:'adminlogin',component:AdminloginComponent},
  {path:'addon',component:AddaddonsComponent},
  {path:'updatewp',component:UpdatewpComponent},
  {path:'deletewp',component:DeletewpComponent},

  
  {path:'customer',component:CustomerComponent,canActivate:[CustauthGuardService]},
  {path:'clogin',component:CusloginComponent},
  {path:'creg',component:CusregistrationComponent},

  {path:'washer',component:WasherComponent},
  {path:'about',component:AboutComponent},
  {path:'signup',component:RegistrationComponent},
  {path:'login',component:LoginComponent},
  {path:'vieworder',component:ViewOrdersComponent}
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
