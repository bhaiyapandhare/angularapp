import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DemoService } from '../service/demo.service';

@Component({
  selector: 'app-demouserdetails',
  templateUrl: './demouserdetails.component.html',
  styleUrls: ['./demouserdetails.component.css']
})
export class DemouserdetailsComponent implements OnInit {

  user :any;

  constructor(private activatedR:ActivatedRoute, private _userData:DemoService) { }

  ngOnInit() {
    let id =  this.activatedR.snapshot.params['id'];
this._userData.getPostById(id).subscribe(u=>{
this.user=u;
console.log(u);

})
  }

}
