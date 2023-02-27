import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tempformassignment',
  templateUrl: './tempformassignment.component.html',
  styleUrls: ['./tempformassignment.component.css']
})
export class TempformassignmentComponent implements OnInit {

  constructor() { }
minAge=17;
maxAge=20;

defaultValue= 'Mumbai' ;
defaultGender= 'Male';
cities:string[]=['Mumbai','Kolkata','Delhi'];

genders =[
  {
    id :'1', value :'Male'
  },
  {
    id:'2' , value:'Female'
  }]
  ngOnInit() {
  }

}
