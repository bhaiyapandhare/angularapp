import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../service/myservice.service';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent implements OnInit {
  // showit="";
//   boss = 'Maruti is Boss of Angular';
  // showText = ""; 
// username:string='Sanket';
// show:boolean = false;

//   Emp = `Yash is Ang Dev and he is 26 years old talented boy from Sangola`;

//   display:boolean = true; 

//   itemImageUrl = '';
  constructor() { }

  ngOnInit() {
  }

  // OnEnroll(val){
  //   this.showit ='You Have Enrolled for Angular.';
  //   alert('You Have Enrolled for Angular.');
  //   console.log('You Have Enrolled for Angular.',val);
    
// alert('You Have Enrolled for Angular.') 
//  }

	  // onSave(val){    	   
    //   this.showText= 'Save button is clicked!' ;
    // console.log("Save button is clicked!", val);   //logic 
	  // }
//     msg:string="";

//     onAddCard(){
// this.msg="Product added to cart sucessfully";
// console.log("after buttion press", this.msg);

//     }
// onWeb:string='';
//     onClick(event){
//       this.onWeb= event.target.value + " Added to cart";  

//     }
//     show1 :string="";
//     onMouseOver(){
//       this.show1 = "You have done it";

//     }
OnEnrollSubmit(){
  const enroll= new MyserviceService();
  enroll.OnEnroll();
}

}
