import { Component, OnInit } from '@angular/core';
 import { UserService } from '../user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  

 
  data:any;
  warning:any;
  constructor(private appservice:UserService ) { }

  ngOnInit(): void {
  }
  check(datafrominput:any){

    if(datafrominput.usermobile_no==" " && datafrominput.password==" "){
 
   this.warning=" enter  credentials";
   
  }
  else{
    this.warning=" ";
   
  }
 
  
   
    this.appservice.select().subscribe((data: any)=>{ 
      this.data=data;
   })

   if(datafrominput['usermobile_no']==this.data[0]['mobile_number'] && datafrominput['password']==this.data[0]['password']){
     alert("login successfully");
  
      window.location.reload();
    
   }else{
     alert(" you enter wrong credentials");
          window.location.reload();
   }

  }
  sentotp(){

    console.log("6767");
  }
}
