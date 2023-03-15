import { Component, OnInit } from '@angular/core';
import { RapidapiService } from 'src/app/service/rapidapi.service';

@Component({
  selector: 'app-adminlist',
  templateUrl: './adminlist.component.html',
  styleUrls: ['./adminlist.component.css']
})
export class AdminlistComponent implements OnInit {

  financeData1:any[]=[];
  
  constructor(private rapidapiService: RapidapiService) {}

  ngOnInit() {
    this.rapidapiService.getFinance().subscribe(
      (data: any) => {
        this.financeData1 = data.news;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}
