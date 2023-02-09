import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-to-parent',
  templateUrl: './child-to-parent.component.html',
  styleUrls: ['./child-to-parent.component.css']
})
export class ChildToParentComponent implements OnInit {

  @Output() fromChild : EventEmitter<any> = new EventEmitter<any>(); // (fromChild)
  // @Output() fromObject : EventEmitter<any> = new EventEmitter<any>(); // (fromObject)

  
//  name:string ="Yash";
//  Id:number = 22;
//  comp:string="Microsoft";

  

  lastname: string = 'Bhai';
  fristName:string = 'Maruti';

  constructor() { };

  ngOnInit() {
  }
  sendToParent() { 
    let data = {
    name:"Maruti",
    id : 22,
    comp : "Microsoft",
    }
    this.fromChild.emit(data);
    
    }
    // toParent(){
    //   this.fromObject.emit(this.name);
    // this.fromObject.emit(this.Id);
    // this.fromObject.emit(this.comp);
    // }
}

