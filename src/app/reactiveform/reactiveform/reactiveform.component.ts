import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {

  isSubmitted:boolean=false;
  myReactiveForm: FormGroup;

  courses:string[]=['Angular','HTML','Javascript'];
  constructor() { 
    this.createForm();
  }

  ngOnInit() {
    // setTimeout(() => {
    //   this.myReactiveForm.patchValue({
    //     'userDeatils' : {
    //              'username': 'Codemind123',
    //             'email': 'codemind@gamil.com'
    //            }
    //   })
    // }, 5000)
  }


  createForm()
  {
    this.myReactiveForm = new FormGroup({
      'username' : new FormControl({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'courses':new FormControl('Javascript')
  
    }),
    'skills': new FormArray([
      new FormControl(null, Validators.required)
    ])
  })

  }

  OnSubmit() {
    this.isSubmitted= true;
    alert('method called');
    console.log('My ReactiveForm', this.myReactiveForm.value)
  }
  OnAddSkills() {
    (<FormArray> this.myReactiveForm.get('skills')).push(new FormControl(null, Validators.required));
  }
}
