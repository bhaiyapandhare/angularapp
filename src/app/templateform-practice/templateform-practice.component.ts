import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-templateform-practice',
  templateUrl: './templateform-practice.component.html',
  styleUrls: ['./templateform-practice.component.css']
})
export class TemplateformPracticeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  onSubmit (form:NgForm ){
    console.log(form);
    

  }

}
