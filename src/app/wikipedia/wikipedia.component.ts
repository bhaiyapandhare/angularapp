import { Component, OnInit } from '@angular/core';
import { title } from 'process';
import { WikipediaService } from '../service/wikipedia.service';

@Component({
  selector: 'app-wikipedia',
  templateUrl: './wikipedia.component.html',
  styleUrls: ['./wikipedia.component.css']
})
export class WikipediaComponent implements OnInit {
  isLoading = false;
  // space;
  pages=[];

  constructor(private wikiService : WikipediaService) { }

  ngOnInit(){

  }
  onTerm(space:string) {
    this.isLoading=true;
  this.wikiService.getWikiByTitle(space).subscribe((res:any)=>{
    this.pages = res.query.search;
    console.log(this.pages);
    this.isLoading=false;

  })
  }

  // onSub(){
  //   this.wikiService.getWiki().subscribe(res=>{
  //     this.space = res;
  //   })
  // }
}
