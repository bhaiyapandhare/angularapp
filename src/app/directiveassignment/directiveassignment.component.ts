import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiveassignment',
  templateUrl: './directiveassignment.component.html',
  styleUrls: ['./directiveassignment.component.css']
})
export class DirectiveassignmentComponent implements OnInit {

  content = 'Role = UI Developer, Work = UI Developer role is to translate creative software design concepts and ideas into reality using front end technology.';
  ContentVisible = false; //! BIdefault btn is disabled

  togglingLog = [];
  limit = 5;

constructor() { }

  ngOnInit() {
  }
  toggleContent() {
    const timestamp = new Date();
    this.togglingLog.push(timestamp);
    this.ContentVisible = !this.ContentVisible; //?Btn id enable after click
  }
  applyColor(i) {
    if (i >= this.limit) {
      return 'blue';

    } else {
      return 'white';
    }

}
}
