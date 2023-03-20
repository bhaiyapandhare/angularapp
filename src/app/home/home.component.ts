import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../service/firebase.service';
import {filter, map} from 'rxjs/operators'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
show:boolean;
// showTable:boolean = false;
  fireBaseArray: any []=[
  
  {id:'NQY8R3vIEcf8xOaWWiM',content: 'We are calling angular post method', title: 'This is firebase example'},
    {id:'NQY8gbCajIxEDazHJzj',content: 'We are calling angular post method', title: 'This is firebase example'},
    {id:'NQY8rZtkCXM7egzGQ9Q',content: 'We are calling angular post method', title: 'This is firebase example'},
    {id:'NQY84f121M_QqBK9v94',content: 'We are calling angular post method', title: 'This is firebase example'},
    {id:'NQY87FeDkJHE51JnU6H',content: 'We are calling angular post method', title: 'This is firebase example'},
    {id:'NQYBbkQlH_sr6DRwPVI',content: 'We are calling angular post method', title: 'This is firebase example'},
    {id:'NQZiyEWNC8i3x3xJTRG',content: 'We are calling angular post method', title: 'This is firebase example'},
    {id:'NQZjMfTz9zRwa3DI3dA',content: 'We are calling angular post method', title: 'This is firebase example'}

  ]
  constructor(private firebaseService: FirebaseService) { }

  ngOnInit() {
    // 1 2 3 o/p 2, 3, 4
    // const obs = of(1,2,3).pipe(
    //   map(x => x + 1)
    //  ).subscribe(res => {
    //   console.log('obs of', res);
    //  })

    // // emit (1,2,3,4,5)
    // const source = from([1,2,3,4,5]);

    // // filter out non-even numbers 
    
    // const example = source.pipe(filter(num => num % 2 === 0));
    // example.subscribe(res => {
    //   console.log(`Even number: ${res}`);
    // })
  
  }
  CreatePost(){
    this.firebaseService.createPosts().subscribe(res=>{
      console.log('posts', res );
    })
  }
  getData(){
    // this.show = true;
    // // this.showTable=!this.showTable;

    // this.firebaseService.getPostDataFireBAse().subscribe(res=>{
    //   console.log('Firebase get', res);
      
    // })
    // GetData() {
      // this.firebaseService.getPostDataFirebase().subscribe(res => {
      //   console.log('Firebase get', res);
      // })
  
      this.firebaseService.getPostDataFireBAse().pipe(
        map(responseData => {
          console.log('before manipulate', responseData)
          // empty array 
          const postArray = [];
          // for in loop 
          for(const key in responseData) {
            // check the key 
            if(responseData.hasOwnProperty(key)) {
              // push new value into array 
              postArray.push({...responseData[key], id:key})
            }
          }
          return postArray;
        })
      ).subscribe(res => {
        console.log('after manipulate data', res);
      })
    }
  }


