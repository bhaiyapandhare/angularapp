import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name="";
  id = '';
  comp = "";

  posts = [
    {
      title: 'Pam Tree',
      content: 'I love this tree'
    },
    {
      title: 'Mango Tree',
      content: 'I love this tree'
    }
  ];


  
  title = 'angularapp';
  count:number = 0;
  username:string = "Maruti";
  currentTime = new Date();
//  imageurl = 'https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg'  

 onclickbutton(){
this.count += 1 ;
 }
 
 ontextcheck(){
  this.username = null;
 }

 onParent(val) {
  console.log('from child to parent', val);
this.name = val.name;
this.id = val.id;
this.comp = val.comp;
}

//  fromObj(value){
//   console.log(`From Object`, value);
  
//  }

 }


