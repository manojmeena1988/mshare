import { Component, OnInit } from '@angular/core';

declare var $:any;
import { UserService } from '../user.service';
@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  mobile_number:any;
   Id:any;
   userdata:any;
   variable:any=0;
   Error:any="0 result";
   withdrawDetail:any;
   TotalAmount:any
   wihdrawAmount:any=0;
  constructor(private appservice:UserService) { 
   


  }

  ngOnInit(): void {
    $("h6").hide();
  this.mobile_number=history.state.data;
 
  this.appservice.GetUserId(this.mobile_number).subscribe(( data:any)=>{ 
  this.variable=data;
    this.userdata=data;
    console.log(this.variable);
if(this.variable==0){

$("h6").show();

}
  })

  this.appservice.withdrawdetail(this.mobile_number).subscribe(( data:any)=>{ 
  console.log(data);
  this.withdrawDetail=data[0];
  this.wihdrawAmount=data[0].wihdrawAmount;
    })
  
    this.appservice.totalDepositeAmount(this.mobile_number).subscribe(( data:any)=>{ 
      console.log(data);
      this.TotalAmount=data;
        })

  }

  

}
