import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

declare var $:any;
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
   id :any;
   user:any;
  constructor(private appservice:UserService) {
 
   }

  ngOnInit(): void {
    this.id=history.state.data;
   
    this.send(this.id);
  }
  send(id:any){
   
    this.appservice.sendId(id).subscribe(( data:any)=>{ 
    
     this.user=data;
     console.log(this.user);
      })
    }
}
