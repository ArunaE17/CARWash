import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AdminService } from 'src/app/service/admin.service';
import { update } from './updatewp';

@Component({
  selector: 'app-updatewp',
  templateUrl: './updatewp.component.html',
  styleUrls: ['./updatewp.component.css']
})
export class UpdatewpComponent implements OnInit {
 updatedetails:update={
    id:'', name:'',
    cost:0,
    description: ''
  }
  message:any;
  constructor(private update:AdminService) { }
  updateForm = new FormGroup({
    id:new FormControl(''),
    name : new FormControl(''),
    cost: new FormControl(''),
    description : new FormControl(''),
    
  })

  public updatewp(){
    let res=this.update.postWp(this.updatedetails);
    res.subscribe(data=>this.message=data)
    console.log(this.updatedetails);
  }

  ngOnInit(): void {
  }

}
