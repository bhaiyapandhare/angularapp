import { Component, OnInit } from '@angular/core';
import { RapidapiService } from '../service/rapidapi.service';

@Component({
  selector: 'app-newsandquote',
  template: `
  <h2>Quote Data</h2>
    <table>
      <thead>
        <tr>
          <th>Symbol</th>
          <th>exchange</th>
          <th>Score</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let item of financeData">
          <td>{{ item.symbol }}</td>
          <td>{{ item.exchange }}</td>
          <td>{{ item.score }}</td>
         
        </tr>
      </tbody>
    </table>
`

})
export class NewsandquoteComponent implements OnInit {
  financeData: any[] = [];

  constructor(private rapidapiService: RapidapiService) {}

  ngOnInit() {
    this.rapidapiService.getFinance().subscribe(
      (data: any) => {
        this.financeData = data.quotes;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}



// <td><a href="{{ item.quoteUrl }}" target="_blank">View Quote</a></td>
// <td><a href="{{ item.newsUrl }}" target="_blank">View News</a></td>