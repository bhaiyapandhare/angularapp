import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'protractor';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  

  @Input () title:'';
  @Input () content:'' ;

  // @Output() fromChild : EventEmitter<string> :new EventEmitter<string>() ;

  // fristName:string= 'Maruti';

  constructor() { }
  ngOnInit() {
  }
 
  
  // sendToParent(){
  //   this.fromChild.emit(this.fristName);
  // }

}


