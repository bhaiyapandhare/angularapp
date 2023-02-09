import { Component, OnInit } from '@angular/core';
import { log } from 'util';
import { Movie } from '../model/model';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {

  title:string=`Top 3 Bollywood Movies`;


  movies:Movie[] =[
{title:`3 Idiots`, director:`Rajkumar`,cast:`Amir`,releaseDate:`2009`},
{title:`Tumbbad`, director:`Rahi`,cast:`Rahi`,releaseDate:`2020`},
{title:`Kantara`, director:`Rishab`,cast:`Rishab`,releaseDate:`2022`},

  ]
  favSongs =[`Ved Tuze`, `Dhaga Dhaga`,`Jiv Rangala`];


  // countries =[ "India" , "Mexico"];
  // states =["Mahrashtra", "Kerala", "Kashmir", "Rajasthan", "Baja California","Durango","Mexico","Sonora"]

  countries = [
  {
    name: 'India',
    states: [
      { name: 'Maharashtra' },
      { name: 'Kerala' },
      // Add more states here
    ]
  },
  {
    name: 'Mexico',
    states: [
      { name: 'Mexico' },
      { name: 'Durango' },
      // Add more states here
    ]
  }
  // Add more countries here
];

selectedCountry = '';
selectedState = '';
states = [];


  constructor() { }
  updateStates() {
 
   
   
      this.states = this.countries.find(country => country.name === this.selectedCountry).states;
    }
  ngOnInit() {
      this.updateStates();
    }

 
// if (countries =="India") {
// for (let index = 0; index <=3; index++) {
//   const element = states.charAt[index];
//   console.log(element);
  
  
// }  
// }
}
