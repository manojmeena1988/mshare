
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { UserService } from '../user.service';
import Swal from 'sweetalert2';



declare var $:any;
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',

  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
   id :any;
   user:any={name:' ', userId:0, totalShares:0 , depoisteShares:0,depositeAmount:0, remainingDeposite:0,installmentNumber:0,
   EMI:0,  Interest1:0, penalty:0, borrowMoney:0,method:''
  }
   WithdrawType:any=' ';
   fatherName:any;
   phoneNumber:any;
   userName:any;
   totalShares:any;
   TotalShares2:any;
   selectedOption:any;
   totalshares1:any;
   remainingDeposite:any;
   installmentNumber:any
   installmentno:any=0;
   borrowMoney:any=0;
   borrowMoney2:any=0;
   EMI:any=0;
  Method:any=' ';
   penalty1:any=0;
   INTEREST:any
   selectedUser:any={
   userid:0,name:' ', borrowMoney:0,TotalDeposite:0, wayOFwithdraw:'  ',installmentno:0

   };
   LeftMoney:any=0;
   TotalDeposite:any=0;
    variable:any='Withdraw Type';
   errorMessage:any='select Withdraw Type';
//constructor
  constructor(private appservice:UserService,private router:Router) {
  }
//lifecycle hook
  ngOnInit(): void {
    this.id=history.state.data;
    this.send(this.id);
    $("h6").hide();
    $("#EMI").hide();
    $("#INTEREST").hide();
//1.
 this.appservice.checkDeposite(this.id).subscribe(( data:any)=>{ 
      })

//2.
this.appservice.checkWithdrawlAmount(this.id).subscribe(( data:any)=>{ // tottal installment is greater than 12 than do this ,what i we get mone in withdral will becme negative
  if(data.message=='no'){
    $("#INTEREST").hide();
    $("#EMI").hide();
  }
})


//3.
this.appservice.checkwithdrawMethod(this.id).subscribe(( data:any)=>{ 
  this.Method=data.response;
  if(data.response=='EMI'){
    this.withdrawButton( )
    $("#EMI").show();
    this.appservice.EMI(this.id).subscribe(( data:any)=>{ 
    this.borrowMoney2=data.response;
      this.EMI=  this.borrowMoney2/12;
     
      })
    }
  else if(data.response=='Interest'){
    $("#INTEREST").show();
    this.appservice.INTEREST(this.id).subscribe(( data:any)=>{ 
      this.borrowMoney2=data.response;
       this.INTEREST= (this.borrowMoney2*20)/100;
       this.user.Interest1=this.INTEREST;
        })
    }
   else{
    $("#EMI").hide();
    $("#INTEREST").hide();
  }
  })
//3.
  this.appservice.PenaltyinDepositeShares(this.id).subscribe(( data:any)=>{ 

    this.penalty1=data.penalty;
  })

  }



send(id:any){
   this.appservice.sendId(id).subscribe(( data:any)=>{ 
  this.totalshares1=data[0].total_shares;;
  this.userName=data[0].name;
  this.fatherName=data[0].father_name;
  this.phoneNumber=data[0].mobile_number;
  this.totalShares=data[0].total_shares;
 })
}

valueChange(){
 this.totalShares=this.TotalShares2;
     
}

saveDeposite(){
  Swal.fire({
        title: '<h3>are you sure you want to deposite money</h3>',
        text: '',
        showCancelButton: true,
        confirmButtonText: 'Confirm',
        cancelButtonText: 'Cancel'
    }).then((result) => {
        if (result.value) {
            
        this.appservice.totalinstallment(this.id).subscribe(( data:any)=>{ 
            this.installmentno=data;
           
            this.user.EMI=this.EMI;
        
            this.user.borrowMoney=this.borrowMoney2;
            this.user.method=this.Method;
            this.user.penalty=this.penalty1;
            this.user.name=this.userName;
            this.user.userId=this.id;
            this.user.totalShares=this.totalshares1;
            this.user.depoisteShares=this.totalShares;
            this.user.depositeAmount=(this.totalShares*1000);
            this.user.remainingDeposite=this.user.totalShares*1000 -this.user.depositeAmount;
            this.user.installmentNumber=this.installmentno;
            
        this.appservice.save_Deposite(this.user).subscribe(( data:any)=>{ 

           if(data.message=='New record created successfully'){
            this.router.navigate(['dashboard']); 
           }
            })
              })

            } else if (result.dismiss === Swal.DismissReason.cancel) {
              Swal.fire(
                'Cancelled',
                'Sorry to see you go.)',
                )
             }
    })
  }


optionChange() {
   this. selectedOption = (<HTMLInputElement>document.getElementById("select")).value;
$("h6").hide();
     }
 
delete(){
    Swal.fire({
      title: '<h5>are you sure you want to delete user ?</h5>',
      text: '',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No'
  }).then((result) => {
      if (result.value) {
          Swal.fire(
          'deleted.',
              )
    this.appservice.delete(this.id).subscribe(( data:any)=>{ 
            if(data.message=='Record deleted successfully'){
              alert("user deleted");
              this.router.navigate(['dashboard']); 
            }
        })
           } else if (result.dismiss === Swal.DismissReason.cancel) {
            Swal.fire(
             'User not deleted.)',
            )
           }
  })
}

withdrawButton( ){
  this.appservice.totalDeposite(this.id).subscribe(( data:any)=>{ 
     this.TotalDeposite=data;
     this.borrowMoney=(this.TotalDeposite*(50/100));
     this.EMI= this.borrowMoney/12;
    })
  }

withdrawMoney(){

  if(this.variable=='Withdraw Type'){
    $("#select").addClass("has-error");
     $("h6").show();
   
  }else{
  Swal.fire({
      title: '<h5>are you sure you want to Withdraw money ?</h5>',
      text: '',
      showCancelButton: true,
      confirmButtonText: 'Confirm ',
      cancelButtonText: 'Cancel'
  }).then((result) => {
      if (result.value) {
         
      
       this.selectedUser.userid=this.id;
       this.selectedUser.name=this.userName;
       this.selectedUser.borrowMoney=this. borrowMoney;
       this.selectedUser.TotalDeposite=this.TotalDeposite;
       this.selectedUser.wayOFwithdraw=this.selectedOption;
       this.selectedUser.installmentno=this.installmentno;
  this.appservice.withdrawMoney(this.selectedUser).subscribe(( data:any)=>{ 
       this.LeftMoney=data.leftMoney;
       this.TotalDeposite=this.LeftMoney;
        if(data.response=='yes'){
             $("#EMI").hide();
             $("#INTEREST").hide();
            //  this.router.navigate(['dashboard']); 
            }
    })

 }else if (result.dismiss === Swal.DismissReason.cancel) {
            Swal.fire(
              'Canceled',
               )
              }
 })
}
}

back(){
    this.router.navigate(['dashboard']);
  }

  DepositeButton(){
     this.variable='Withdraw Type'
  }  
   
}
