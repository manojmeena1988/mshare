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

}
