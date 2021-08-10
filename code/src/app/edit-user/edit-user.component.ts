import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service'
import { Router } from "@angular/router";
declare var $:any;
@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
id:any;
userName:any;
totalshares1:any;
fatherName:any;
phoneNumber:any;
totalShares:any;
  constructor(private appservice:UserService,private router:Router) { }

  ngOnInit(): void {
    this.id=history.state.data;
    this.send(this.id);
   
  }

  send(id:any){
    this.appservice.sendId(id).subscribe(( data:any)=>{ 

  
   this.userName=data[0].name;
   this.fatherName=data[0].father_name;
   this.phoneNumber=data[0].mobile_number;
   this.totalShares=data[0].total_shares;
  })
 }
update(data:any){
  this.appservice.update(data).subscribe(( data:any)=>{ 
if(data.message=='user updated'){
  alert("user updated");
  this.router.navigate(['dashboard']); 
}
  
  
   })
}

}
