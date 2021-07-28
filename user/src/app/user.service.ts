import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  
  public add(data:any){
    return this.http.post('http://localhost/PROJECT2/src/app/API/adduser.php',data,{headers: {
      'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'  }});

   }
 
   public getUser(){
    return this.http.post('http://localhost/PROJECT2/src/app/API/showUser.php',{headers: {
      'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'  }});

   }

   public delete(data:any){
    return this.http.post('http://localhost/PROJECT2/src/app/API/deleteUser.php',data,{headers: {
      'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'  }});

   }
}
