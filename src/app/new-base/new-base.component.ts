import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-base',
  templateUrl: './new-base.component.html',
  styleUrls: ['./new-base.component.css']
})
export class NewBaseComponent implements OnInit {
add(){
  let a=10;
 let  b=20;
 let c=a+b;
 document.write("The addition is : "+c);
 console.log(c);
 return c;
  
}
  

  constructor() { }

  ngOnInit() {
  }

}
