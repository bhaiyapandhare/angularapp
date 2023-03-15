import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fashiondet',
  templateUrl: './fashiondet.component.html',
  styleUrls: ['./fashiondet.component.css']
})
export class FashiondetComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {

  }

  onFashionGents(){
    this.route.navigate(['/fashiongents']);

  }
  onFashionL(){
this.route.navigate(['/fashionladies']);
  }

}
