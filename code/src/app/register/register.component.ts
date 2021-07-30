import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
declare var $:any;
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
UserData:any;
error:any=' ';
  constructor(private appservice:UserService) { }

  ngOnInit(): void {
  }
add(inputdata:any){
console.log(inputdata);
this.UserData=inputdata;
if(this.UserData.confirmpassword!='' && this.UserData.password!='' && this.UserData.username!='' && this.UserData.usermobile_no!='' && this.UserData.useremail!='' && this.UserData.total_shares!='')
{
if(this.UserData.confirmpassword==this.UserData.password)
{ this.error=' ';
  
  // call api 
  this.appservice.register(this.UserData ).subscribe((data: any)=>{ 

 if(data.message=="user updated"){
   alert("user added");
   window.location.reload();
 }else{
  alert("mobile number already exist");
  window.location.reload();
 }

})
}else{

  this.error="password not match ";
}
}
else{
  alert("enter your detail");
  $("div").addClass("has-error");
}




}
}
