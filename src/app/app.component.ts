import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { DemoService } from './service/demo.service';
import { MyserviceService } from './service/myservice.service';
import { RapidapiService } from './service/rapidapi.service';
import { WikipediaService } from './service/wikipedia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  name="";
  id = '';
  comp = "";
  products={};
  ob1;
  set:any;
  news:any;

  pages=[];
  isLoading=false;

  dataDestroy=true;
  myObservable:any;

  data : string = 'red';
    onSub(){
    this.data +=1;
    
  }



  namesearch="";

  posts = [
    {
      title: 'Pam Tree',
      content: 'I love this tree'
    },
    {
      title: 'Mango Tree',
      content: 'I love this tree'
    }
  ];


  
  title = 'angularapp';
  count:number = 0;
  username:string = "Maruti";
  currentTime = new Date();
  activatedR: any;
  user: Object;
//  imageurl = 'https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg'  

 onclickbutton(){
this.count += 1 ;
 }
 
 ontextcheck(){
  this.username = null;
 }

 onParent(val) {
  console.log('from child to parent', val);
this.name = val.name;
this.id = val.id;
this.comp = val.comp;
}

 fromObj(value){
  console.log(`From Object`, value);
  
 }

constructor(private rapidService: RapidapiService, private myservice:MyserviceService , private demoService:DemoService ,private wikiService : WikipediaService){}
// private rapidService: RapidapiService, private myservice:MyserviceService , private demoService:DemoService
ngOnInit(): void {
this.myObservable = of('this is custom observable').pipe(delay(3000)).subscribe(res=>{
  console.log('myObservable data', res);
  
})

// let title =  this.activatedR.snapshot.params['title'];
//   this.rapidService.getPostByTitle(title).subscribe(u=>{
//   this.user=u;
//   })


  this.rapidService.getFinance().subscribe((resp:any) =>{
console.log('user api res', resp);
this.news= resp.news;


  })
  this.products = this.myservice.products;

 this.demoService.getUsers().subscribe(res => {

  this.set = res;
  console.log(this.set);
  

    console.log('user api results', res);
    console.log(res[0]);
    console.log(res[1]);
    console.log(res[5]);
    
    this.ob1=res[0];
    
    
    
  }, err => {
    console.log(err);
  })
}

onTerm(space:string) {
  this.isLoading=true;
this.wikiService.getWikiByTitle(space).subscribe((res:any)=>{
  this.pages = res.query.search;
  console.log(this.pages);
  this.isLoading=false;

})
}

handleData(value){
this.data= value.target.value;
}
onDestroy(){
  this.dataDestroy = false;
}
 }


