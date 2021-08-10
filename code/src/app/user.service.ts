import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  public select(data:any){
    return this.http.post('http://localhost/PROJECT1/src/app/API/login.php',data,{headers: {
      'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'  }});

   }
   public reset(data:any){
    return this.http.post('http://localhost/PROJECT1/src/app/API/reset.php',data,{headers: {
      'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'  }});

   }
   public getUser(){
    return this.http.post('http://localhost/PROJECT1/src/app/API/showUser.php',{headers: {
      'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'  }});

   }

getSelectedUser(username:any){
  return this.http.post('http://localhost/PROJECT1/src/app/API/getSelectedUser.php',username,{headers: {
    'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'  }});
}

public delete(data:any){
  return this.http.post('http://localhost/PROJECT1/src/app/API/deleteUser.php',data,{headers: {
    'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'  }});

 }
 public register(data:any){
  return this.http.post('http://localhost/PROJECT1/src/app/API/register.php',data,{headers: {
    'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'  }});

 }
 public search(data:any ){
  return this.http.post('http://localhost/PROJECT1/src/app/API/inputoption.php',data,{headers: {
    'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'  }});

 }
 public sendId(data:any ){
  return this.http.post('http://localhost/PROJECT1/src/app/API/getuserId.php',data,{headers: {
    'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'  }});

 }
 public getUserData( ){
  return this.http.post('http://localhost/PROJECT1/src/app/API/getuserId.php',{headers: {
    'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'  }});

 }
 public update(data:any ){
  return this.http.post('http://localhost/PROJECT1/src/app/API/Update.php',data,{headers: {
    'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'  }});

 }
 save_Deposite(data:any){
  return this.http.post('http://localhost/PROJECT1/src/app/API/saveDeposite.php',data,{headers: {
    'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'  }});
 }
 checkDeposite(userId:any){
  return this.http.post('http://localhost/PROJECT1/src/app/API/checkDeposite.php',userId,{headers: {
    'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'  }});
 }

 totalinstallment(id :any){
  return this.http.post('http://localhost/PROJECT1/src/app/API/totalinstallment.php',id,{headers: {
    'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'  }});
 }
 totalDeposite(id :any){
  return this.http.post('http://localhost/PROJECT1/src/app/API/totalDeposite.php',id,{headers: {
    'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'  }});
 }
 withdrawMoney(data :any){
  return this.http.post('http://localhost/PROJECT1/src/app/API/withdrawMoney.php',data,{headers: {
    'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'  }});
 }
 checkwithdrawMethod(data :any){
  return this.http.post('http://localhost/PROJECT1/src/app/API/checkwithdrawMethod.php',data,{headers: {
    'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'  }});
 }
EMI(data :any){
  return this.http.post('http://localhost/PROJECT1/src/app/API/EMI.php',data,{headers: {
    'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'  }});
 }

 INTEREST(data :any){
  return this.http.post('http://localhost/PROJECT1/src/app/API/INTEREST.php',data,{headers: {
    'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'  }});
 }

 PenaltyinDepositeShares(id :any){
  return this.http.post('http://localhost/PROJECT1/src/app/API/PenaltyinDepShares.php',id,{headers: {
    'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'  }});
 }
 checkWithdrawlAmount(data :any){
  return this.http.post('http://localhost/PROJECT1/src/app/API/checkWithdrawlAmount.php',data,{headers: {
    'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'  }});
 }
 GetUserId(data :any){
  return this.http.post('http://localhost/PROJECT1/src/app/API/UserId.php',data,{headers: {
    'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'  }});
 }
 userpayment(data :any){
  return this.http.post('http://localhost/PROJECT1/src/app/API/userpayment.php',data,{headers: {
    'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'  }});
 }
 withdrawdetail(data :any){
  return this.http.post('http://localhost/PROJECT1/src/app/API/withdrawdetail.php',data,{headers: {
    'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'  }});
 }
 totalDepositeAmount(data :any){
  return this.http.post('http://localhost/PROJECT1/src/app/API/totalDepositeAmount.php',data,{headers: {
    'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'  }});
 }
}
