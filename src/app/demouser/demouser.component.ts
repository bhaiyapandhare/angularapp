import { Component, OnInit } from '@angular/core';
import { DemoService } from '../service/demo.service';
import { MyserviceService } from '../service/myservice.service';

@Component({
  selector: 'app-demouser',
  templateUrl: './demouser.component.html',
  styleUrls: ['./demouser.component.css']
})
export class DemouserComponent implements OnInit {

  set :any;

  constructor(private _demoService:DemoService) { }

  ngOnInit() {

    this._demoService.getUsers().subscribe(res => {

      this.set = res;
      console.log('User Deatils', res);
      
  })

}
}