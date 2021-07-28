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
     this. showUser(); //call function 
 }
 
   ngOnInit(): void {
   }
 
 
   showUser(){
     this.appservice.getUser().subscribe((data: any)=>{ 
      this.ShowUserData=data;
     })
     }
 
 Search(username:any)
 {
 this. selectedUserName=username;
 
 this.appservice.getSelectedUser( this.selectedUserName).subscribe((data: any)=>{ 
  this.userdetail=data;
 }) 
 
 //jquery code
  $("div").removeClass("hide");
  $("div").addClass("show");
   this.InputBoxValue=" ";
 }


 delete(data:any){
  this.appservice.delete(data).subscribe(( )=>{ 
    window.location.reload();
   })
  }

}
