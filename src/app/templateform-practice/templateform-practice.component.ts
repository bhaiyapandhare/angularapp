import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MyserviceService } from '../service/myservice.service';

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

onclick(){
  const clicked =new MyserviceService();
  clicked.OnEnroll();
}

}
