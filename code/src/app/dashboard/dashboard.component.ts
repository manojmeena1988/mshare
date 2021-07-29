import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
declare var $:any;
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  ShowUserData:any;
  selectedUserName:any;
  userdetail:any;
  InputBoxValue:any;
 
   constructor(private appservice:UserService) {
     
 }
 
   ngOnInit(): void {
   }
 
 
   
 
 Search(username:any)
 {
 this. selectedUserName=username;
 
 this.appservice.getSelectedUser( this.selectedUserName).subscribe((data: any)=>{ 
  this.userdetail=data;
  console.log(this.userdetail);
  console.log(this.userdetail[0]['OTP']);
  this.InputBoxValue=" ";
  if(this.userdetail[0]['OTP']==6767){
   
    $("P").addClass("hide");
    $("#tbody").removeClass("hide");
  }
  else{
    $("P").removeClass("hide");
    $("#tbody").addClass("hide");
  }
 }) 
 
 //jquery code
  // $("div").removeClass("hide");
  // $("div").addClass("show");
  //  this.InputBoxValue=" ";
 }


 delete(data:any){
  this.appservice.delete(data).subscribe(( )=>{ 
    window.location.reload();
   })
  }

}
