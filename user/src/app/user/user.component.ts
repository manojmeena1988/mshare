import { Component, OnInit } from '@angular/core';
declare var $:any;
import { UserService } from '../user.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  
  Data:any;
  ShowUserData:any;
  constructor(private appservice:UserService) {
   this. showUser();
  }

  ngOnInit(): void {
   }

add(data:any){
this.Data=data;
this.appservice.add(this.Data).subscribe((data: any)=>{ 
  if(data=="user already exit"){
    $("div").addClass(" has-error");
    $("p").removeClass(" has-error");
    $("p").addClass("show");
   }
})
window.location.reload();
}


showUser(){
this.appservice.getUser().subscribe((data: any)=>{ 
 this.ShowUserData=data;
 })
}


delete(data:any){
this.appservice.delete(data).subscribe(( )=>{ 
  window.location.reload();
 })
}


}
