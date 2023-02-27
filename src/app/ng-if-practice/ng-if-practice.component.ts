import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-ng-if-practice",
  templateUrl: "./ng-if-practice.component.html",
  styleUrls: ["./ng-if-practice.component.css"],
})
export class NgIfPracticeComponent implements OnInit {
  books = [
    {
      title: "1. Vue.JS Features",
      imageurl:"https://www.rlogical.com/wp-content/uploads/2021/05/23f-1024x538.png",
      content: `Virtual DOM. VueJS makes the use of virtual DOM, which is also used by other frameworks such as React, Ember, etc.
Data Binding,
Components ,
Event Handling,
Animation/Transition ,
Computed Properties ,
Templates
Directives.`,
    },
    {
      title: "2. ReactJS Features",
      imageurl:
        "https://cdn.mindmajix.com/blog/images/reactjs-features-250919.png",
      content: `JSX - JavaScript Syntax Extension. JSX is a preferable choice for many web developers. 
Unidirectional Data Flow and Flux. React. 
Virtual Document Object Model (VDOM) React contains a lightweight representation of real DOM in the memory called Virtual DOM. 
Extensions. 
Debugging.`,
    },
    {
      title: "3. Angular Features",
      imageurl:
        "https://cdn.educba.com/academy/wp-content/uploads/2020/02/angular-features.jpg",
      content: `Custom Components. Angular enables users to build their own components that can pack functionality along with rendering logic into reusable pieces. ...
      Data Binding. 
      Dependency Injection. 
      Testing. 
      Comprehensive. 
      Browser Compatibility.`,
    },

    {
      title:'' ,
      imageurl: ``,
    }
  ];

  Data=[
    {id:1, name1:"Sanket", Email:"sanket@angula.com",Action:"Remove"},
    {id:2, name1:"Ritesh", Email:"ritesh@angula.com",Action:"Remove"},
    {id:3, name1:"Yash", Email:"yash@angula.com",Action:"Remove"}


  ]

  show:boolean = true;

  constructor() {}

  ngOnInit() {}
}
