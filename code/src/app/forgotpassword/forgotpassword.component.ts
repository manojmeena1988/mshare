
import { Component, OnInit } from '@angular/core';
declare var $:any;
import { UserService } from '../user.service';
@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {
Data:any;
warning:any;
error:any;

  constructor(private appservice:UserService) {
    console.log("workum");
   }

  ngOnInit(): void {
  }
  Reset(DATA:any){

    if((DATA.usermobile_number==='' )&& (DATA.password=='') && (DATA.confirm_password==='') && (DATA.OTP ==='')){
 
        alert("Please Enter your  Credentials");
        $("div").addClass("has-error");
       }else{

    if(DATA.password==DATA.confirm_password){
    
      this.appservice.reset(DATA).subscribe((data: any)=>{ 
        this.Data=data;
        alert(this.Data) ;
        if(this.Data=="password updated"){
          window.location.reload();
          }else{
            $("div").addClass("has-error");
          }  
       })
      
    }else{
      this.warning="password not match";
    }

  }
    
    // if((DATA.userid==" " )&& (DATA.password==" ") && (DATA. confirm_password==" ") && (DATA.OTP ==" ")){
 
    //   this.error ="Please Enter  Credentials";
    //  }
    //  else{
    //    this.error=" ";

    //    if(DATA.password==DATA.confirm_password){
    //     this.warning=" ";
    //     this.appservice.reset(DATA).subscribe((data: any)=>{ 
    //       this.Data=data;
    //       alert(this.Data) ;
    //       if(this.Data=="password updated"){
    //         window.location.reload();
    //       }
    //      })
    //   }else{
    //     this.warning="password not match";
    //   }
      // }




  }
}
