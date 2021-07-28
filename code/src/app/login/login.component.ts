import { Component, OnInit } from '@angular/core';
 import { UserService } from '../user.service';
 import { Router } from "@angular/router";


 declare var $:any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  Data:any;
  warning:any;
  DataFromInput:any;
  mobile_number:any=' ';
  password:any=' ';
  constructor(private appservice:UserService, private router:Router ) { }

  ngOnInit(): void {
  }

  check(datafrominput:any){
    this.DataFromInput=datafrominput;

    //api call
    this.appservice.select(this.DataFromInput).subscribe((data: any)=>{ 
      this.Data=data;

        for(let i=0; i<this.Data.length; i++){
       this.password =this.Data[i].password; 
       this.mobile_number =this.Data[i].mobile_number; 
    }

    if(datafrominput['usermobile_no']== this.mobile_number&& datafrominput['password']==  this.password){
    this.router.navigate(['dashboard']); 
        }
        else{
    $("div").addClass("has-error");
     alert(" you enter wrong credentials");}
   
  })

  //  if(datafrominput.usermobile_no==" " && datafrominput.password==" "){
  //  this.warning=" enter  credentials";
  // $("div").addClass("has-error");
  //  }
  // else{
  //   this.warning=" ";
  //   $("div").removeClass("has-error");
  //  }   
}


  sentotp(){
console.log("6767");
  }

}
