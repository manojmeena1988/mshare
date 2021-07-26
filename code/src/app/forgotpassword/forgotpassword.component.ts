import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import{FormControl,Validators,FormGroup} from '@angular/forms'
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

  constructor(private appservice:UserService) { }

  ngOnInit(): void {
  }
  Reset(DATA:any){
    
    if((DATA.userid==" " )&& (DATA.password==" ") && (DATA. confirm_password==" ") && (DATA.OTP ==" ")){
 
      this.error ="Please Enter  Credentials";
     }
     else{
       this.error=" ";

       if(DATA.password==DATA.confirm_password){
        this.warning=" ";
        this.appservice.reset(DATA).subscribe((data: any)=>{ 
          this.Data=data;
          alert(this.Data) ;
          if(this.Data=="password updated"){
            window.location.reload();
          }
         })
      }else{
        this.warning="password not match";
      }
      }




  }
}
