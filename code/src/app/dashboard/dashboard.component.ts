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
  options:any;
  search:any={
    name:' '
  };
  selected_name:any;
  
   constructor(private appservice:UserService) {
   
 }
 
   ngOnInit(): void {
    
    }
 
 
   
 
 Search(username:any)
 {
 this. selectedUserName=username;
 this.appservice.getSelectedUser( this.selectedUserName).subscribe((data: any)=>{ 
  this.userdetail=data;
  
  this.InputBoxValue=" ";
  if(this.userdetail[0]['OTP']==6767){
   
    $("P").hide();
    $("#tbody").show();
  }
  else{
    $("P").show();
    $("#tbody").hide();
  }
 }) 
 }


//  delete(data:any){
//   this.appservice.delete(data).subscribe(( )=>{ 
//     location.reload();
    
//    })
//   }

  autocomplete($event:any){
    if(this.InputBoxValue==''){
      $("#ulautocomplete").hide();
    }
// $('#ulautocomplete').show();
this.search.name= (<HTMLInputElement>document.getElementById('Username')).value;
if (this.search.name.length > 2) {
   this.appservice.search(this.search).subscribe(( data:any)=>{ 
    this.options=data;
    $("#ulautocomplete").show();
    
    })
  }
}

  selectedname(name:any){
    this.InputBoxValue=name;
     $("#ulautocomplete").hide();
    if(this.InputBoxValue==''){
      $("#ulautocomplete").hide();
    }
  }
  
  
  }


