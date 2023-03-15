import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  url= 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http:HttpClient) { }

  getPost(){
    return this.http.get(this.url);
  }
}
