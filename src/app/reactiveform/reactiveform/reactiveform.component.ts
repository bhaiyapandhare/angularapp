import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
 
@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {
  NaNames;
  isSubmitted:boolean=false;
  myReactiveForm: FormGroup;

  courses:string[]=['Angular','HTML','Javascript'];
  
  constructor(private _fb: FormBuilder) { 
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


  createForm(){
  // {
  //   this.myReactiveForm = new FormGroup({
  //     'username' : new FormControl({
  //     'email': new FormControl(null, [Validators.required, Validators.email], this.NaEmails),
  //     'courses':new FormControl('Javascript')
  
  //   }),
  //   'skills': new FormArray([
  //     new FormControl(null, Validators.required)
  //   ])
  // })

  // }
  this.myReactiveForm = this._fb.group({
    userDeatils: this._fb.group({
      username: ['', ],
      email: ['', [Validators.required, Validators.email], this.NaEmails]
    }),
    course: ['Angular'],
    skills: this._fb.array([])
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

  NaEmails(control: FormControl) : Promise<any> | Observable<any> 
  {
    const myResponse = new Promise<any> ((resolve, reject) => {
      setTimeout(() => {
        if(control.value == 'codemindtechnology@gmail.com') {
          resolve({'emailNotAllowed': true})
        } else {
          resolve(null)
        }
      }, 3000)
    })
    return myResponse;
  }
}
