import { Component, OnInit } from '@angular/core';
import { UtilityService } from 'src/app/service/utility.service';

@Component({
  selector: 'app-c2',
  templateUrl: './c2.component.html',
  styleUrls: ['./c2.component.css']
})
export class C2Component implements OnInit {
  uname;
  constructor(private uService : UtilityService) { 
    this.uService.userName.subscribe(res=>{
      this.uname= res;
    })
  }

  ngOnInit() {
  }
  updateUserName(Uname)
  {
    this.uname = Uname.value;
    console.log(Uname.value);
    this.uService.userName.next(Uname.value);
  }

}
