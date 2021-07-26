import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  public select(){
    return this.http.post('http://localhost/PROJECT1/src/app/API/login.php',{headers: {
      'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'  }});

   }
   public reset(data:any){
    return this.http.post('http://localhost/PROJECT1/src/app/API/reset.php',data,{headers: {
      'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'  }});

   }
}
