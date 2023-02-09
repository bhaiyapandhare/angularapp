import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-passwordgenerator',
  templateUrl: './passwordgenerator.component.html',
  styleUrls: ['./passwordgenerator.component.css']
})
export class PasswordgeneratorComponent implements OnInit {
password='';
includesLetter=false;
includesNumber=false;
includesSymbol=false;
 inputLength=0;

onChangeUseLetter(){
  this.includesLetter =!this.includesLetter;
  console.log(`includesLetter:`,this.includesLetter);
  
}
onChangeUseNumber(){
  this.includesNumber =!this.includesNumber;
  console.log(`includesNumber:`,this.includesNumber);
  
}
onChangeUseSymbol(){
  this.includesSymbol =!this.includesSymbol;
  console.log(`includesSymbol:`,this.includesSymbol);
  
}
numberLength(value:string){
  let parsedValue= parseInt(value);
  if(!isNaN (parsedValue)){
    this.inputLength = parsedValue;
    console.log(this.inputLength);
    
  }
}
generatePassword(){
  const letter='abcdefghijklmnopqrstuvwxyz';
  const number='1234567890';
const symbol ='!@#$%^&*()';
 let generatePassword = '';
 let validCharecters ='';
 if (this.includesLetter) {
  validCharecters += letter;
 }
 if (this.includesNumber) {
  validCharecters += number;
 }
 if (this.includesSymbol) {
  validCharecters += symbol;
 }
}
  constructor() { }

  ngOnInit() {
  }

}
