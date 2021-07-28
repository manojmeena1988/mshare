import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http:HttpClient) { }

  public getUser(){
    return this.http.post('http://localhost/PROJECT3/src/app/API/showUser.php',{headers: {
      'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'  }});

   }

getSelectedUser(username:any){
  return this.http.post('http://localhost/PROJECT3/src/app/API/getSelectedUser.php',username,{headers: {
    'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'  }});
}


}