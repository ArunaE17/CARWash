import { NgModule } from '@angular/core';
import{HttpClientModule} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './sharedpages/navbar/navbar.component';
import { FooterComponent } from './sharedpages/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { AdminComponent } from './pages/admin/admin.component';
import { CustomerComponent } from './pages/customer/customer.component';
import { AboutComponent } from './pages/about/about.component';
import { WasherComponent } from './pages/washer/washer.component';
import { ServicesComponent } from './pages/services/services.component';
import { RegistrationComponent } from './sharedpages/registration/registration.component';
import { LoginComponent } from './sharedpages/login/login.component';
import { AddaddonsComponent } from './pages/admin/addaddons/addaddons.component';





import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ViewOrdersComponent } from './pages/washer/view-orders/view-orders.component';
import { CusloginComponent } from './pages/customer/cuslogin/cuslogin.component';
import { CusregistrationComponent } from './pages/customer/cusregistration/cusregistration.component';
import { UpdatewpComponent } from './pages/admin/updatewp/updatewp.component';
import { DeletewpComponent } from './pages/admin/deletewp/deletewp.component';
import { AdminregComponent } from './pages/admin/adminreg/adminreg.component';
import { AdminloginComponent } from './pages/admin/adminlogin/adminlogin.component';

@NgModule({
  declarations: [
   

    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AdminComponent,
    CustomerComponent,
    AboutComponent,
    WasherComponent,
    ServicesComponent,
    RegistrationComponent,
    LoginComponent,
    AddaddonsComponent,
    ViewOrdersComponent,
    CusloginComponent,
    CusregistrationComponent,
    UpdatewpComponent,
    DeletewpComponent,
    AdminregComponent,
    AdminloginComponent,
   
  
   
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
