import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipeexample',
  templateUrl: './pipeexample.component.html',
  styleUrls: ['./pipeexample.component.css']
})
export class PipeexampleComponent implements OnInit {
  users: any[];

  price: number =7000;
todaysDate= new Date();
countLength:number=500;
employee={
  empid: '1' , empname: 'shree'
}
  constructor() { }

  ngOnInit() {
    console.log(this.todaysDate);
    
  }
}
