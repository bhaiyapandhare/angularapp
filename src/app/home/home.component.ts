import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../service/firebase.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private firebaseService: FirebaseService) { }

  ngOnInit() {

  
  }
  CreatePost(){
    this.firebaseService.createPosts().subscribe(res=>{
      console.log('posts', res );
    })
  }
  getData(){
    this.firebaseService.getPostDataFireBAse().subscribe(res=>{
      console.log('Firebase get', res);
      
    })
  }

}
