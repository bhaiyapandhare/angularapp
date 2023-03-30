import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

   

  apiUrl = 'https://jsonplaceholder.typicode.com/users';
  constructor(private httpClient: HttpClient) { }
  products=[
    {name:'laptopm '}
  ]


  getUsers () {
   return this.httpClient.get(this.apiUrl);
  } 
  getPostById(id: number) {
    return this.httpClient.get(this.apiUrl+ '/'+ id);
   }
   getdata(): string[] {
    return ['C','C++', 'JAVA', 'Python'];
}
}
