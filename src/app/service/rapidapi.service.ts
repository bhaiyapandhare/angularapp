import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RapidapiService {

 url = 'https://yh-finance.p.rapidapi.com/auto-complete?q=tesla&region=US';
  constructor(private httpClient: HttpClient) { }

  getFinance() {
    let headers = new HttpHeaders({
      'X-RapidAPI-Key': '933cc418d3msh92be32ffc22b38ap1db3ccjsn412965bcf551',
      'X-RapidAPI-Host': 'yh-finance.p.rapidapi.com'
    });
   return this.httpClient.get(this.url, { headers: headers});
  }


  getPostByTitle(title: string) {
    return this.httpClient.get(this.url+ '/'+ title);
   }
}
