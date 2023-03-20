import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {

  @Input() pages = [];
  @Input() isLoading:boolean;
  // isLoading:boolean;
  constructor() { }

  ngOnInit() {
  }

}
