import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminService } from 'src/app/service/admin.service';
import { Addon } from './addon';

@Component({
  selector: 'app-addaddons',
  templateUrl: './addaddons.component.html',
  styleUrls: ['./addaddons.component.css']
})
export class AddaddonsComponent implements OnInit {

  addonDetails:Addon={
    _id:'', name:'',
    cost:0,
    description: ''
  }
  message:any;
  constructor(private admin:AdminService) { }
  AddonForm = new FormGroup({
    id:new FormControl(''),
    name : new FormControl('',Validators.required),
    cost: new FormControl('',[Validators.required]),
    description : new FormControl('',Validators.required),
    

  })
  
  public postWp(){
    let res=this.admin.postWp(this.addonDetails);
    res.subscribe(data=>this.message=data)
    console.log(this.addonDetails);
  }
  ngOnInit(): void {
  }
  

}
