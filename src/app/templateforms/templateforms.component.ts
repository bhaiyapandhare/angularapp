import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-templateforms',
  templateUrl: './templateforms.component.html',
  styleUrls: ['./templateforms.component.css']
})
export class TemplateformsComponent implements OnInit {

  
  isSubmitted: boolean = false;
  formData={
    email:'',
    password:'',
    course:'',
    gender:'',
  }



emails='';
defaultValue= 'Angular';
defaultGender='Male';
courses:string[]=['Angular', 'Javascript','Typescript'];

genders=[
  {
    id :'1', value :'Male'
  },
  {
    id:'2' , value:'Female'
  }
]

  constructor() { }

  ngOnInit() {
  }
  login(form: NgForm) {
    this.isSubmitted = true;
console.log(form);

 this.formData.email = form.value.email;
 this.formData.password = form.value.password;
 this.formData.course = form.value.course;
 this.formData.gender = form.value.gender;
//form.reset();

form.controls['course'].setValue('Angular');
form.controls['gender'].patchValue('Male');

// POST api/ Saveuser(formData);

  }


}
