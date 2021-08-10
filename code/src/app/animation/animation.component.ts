import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.css']
})
export class AnimationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
   
              $('#loader').delay(500).fadeOut();
              $('#mask').delay(1000).fadeOut('slow');
          
            
   
  
  }

  

 
}
