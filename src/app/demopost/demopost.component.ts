import { Component, OnInit } from '@angular/core';
import { PostService } from '../service/post.service';

@Component({
  selector: 'app-demopost',
  templateUrl: './demopost.component.html',
  styleUrls: ['./demopost.component.css']
})
export class DemopostComponent implements OnInit {

  constructor(private _postService:PostService) { }

  arrPost:any;

  ngOnInit() {

    this._postService.getPost().subscribe(res=>{

      console.log(res);

      this.arrPost= res;


    })

  }

}
