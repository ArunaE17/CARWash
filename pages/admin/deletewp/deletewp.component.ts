import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AdminService } from 'src/app/service/admin.service';
import { deletewp } from './deletewp';

@Component({
  selector: 'app-deletewp',
  templateUrl: './deletewp.component.html',
  styleUrls: ['./deletewp.component.css']
})
export class DeletewpComponent implements OnInit {
  deletedetails:deletewp={
    id:''
  }
  message:any;
  constructor(private deletewps:AdminService) { }
  deleteForm = new FormGroup({
    id:new FormControl('')
    
  })
  // public deletewp(){
  //   let res=this.deletewps.delete(this.deletedetails);
  //   res.subscribe(data=>this.message=data)
  //   console.log(this.deletedetails);
  // }


  ngOnInit(): void {
  }

}
