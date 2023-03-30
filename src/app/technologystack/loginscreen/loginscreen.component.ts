import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DemoService } from 'src/app/service/demo.service';

@Component({
  selector: 'app-loginscreen',
  templateUrl: './loginscreen.component.html',
  styleUrls: ['./loginscreen.component.css']
})
export class LoginscreenComponent implements OnInit {

  login:boolean=false;
  courses: string[];

  signupForm = new FormGroup ({
    email:new FormControl('',[Validators.required , Validators.pattern('[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$')]),
    password:new FormControl('',[Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]),
  });

  constructor(private route:Router , private demoS:DemoService ){}

  handleSubmit(){
    console.log(this.signupForm.value);
    
  }

  get f(){
    return this.signupForm.controls
  }
  
  ngOnInit(): void {
    this.courses = this.demoS.getdata();
  }
  onSub(){
    this.route.navigate(['/homepage']);
    this.login= true;

  }

}


