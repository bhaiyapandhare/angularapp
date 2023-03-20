import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WikipediaService {

  url= 'https://en.wikipedia.org/w/api.php'
  
  constructor(private httpClient: HttpClient) { }

  // getWiki(){
  //  return this.httpClient.get(this.url)
  // }

  getWikiByTitle(space:string){
    return this.httpClient.get(this.url ,{
      params: {
        action: 'query',
        format: 'json',
        list: 'search',
        utf8: '1',
        srsearch: space,
        origin: '*'
        }
    }
    
   
      );

  }
}
