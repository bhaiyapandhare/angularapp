import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { CoreService } from 'src/app/service/core.service';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-empaddedit',
  templateUrl: './empaddedit.component.html',
  styleUrls: ['./empaddedit.component.css']
})
export class EmpaddeditComponent implements OnInit {
empForm:FormGroup;
  education:string[]=[
    'Matric',
    'Diploma',
    'Intermediate',
    'Graduate',
    'Post Graduate'
  ]
  constructor(
    private _fb: FormBuilder , 
    private _empService:EmployeeService ,
    private _dialogRef: MatDialogRef<EmpaddeditComponent>,
    private _coreService:CoreService,
     @Inject(MAT_DIALOG_DATA) public data:any  ) {
    this.empForm = this._fb.group({
      firstName:'',
      lastName:'',
      email:'',
      dob:'',
      gender:'',
      education:'',
      company:'',
      experince:'',
      package:''
    })
   }

  ngOnInit() {
    this.empForm.patchValue(this.data)
  }
  onFormSubmit(){
    if (this.empForm.valid){
if (this.data) {
  this._empService.updateEmployee(this.data.id, this.empForm.value).subscribe({
    next:(val:any)=> {
      this._coreService.openSnackBar(`Employee updated!`,`done`);
      this._dialogRef.close(true);
    },
  
    error:(err:any) => {
      console.error(err); 
    }
  })       
} else{
  this._empService.addEmployees(this.empForm.value).subscribe({
    next:(val:any)=> {
      this._coreService.openSnackBar(`Employee added`,`done`);
      this._dialogRef.close(true);
    },
  
    error:(err:any) => {
      console.error(err); 
    }
  })     
      }
    }
}
}
