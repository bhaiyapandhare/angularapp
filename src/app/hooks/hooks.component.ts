import { AfterContentChecked, AfterContentInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { DemoService } from '../service/demo.service';

@Component({
  selector: 'app-hooks',
  templateUrl: './hooks.component.html',
  styleUrls: ['./hooks.component.css']
})
export class HooksComponent implements OnChanges,OnInit,DoCheck,AfterContentInit,AfterContentChecked , OnDestroy {

  @ContentChild("child", { static: false}) contentChild: ElementRef;
  @ContentChild("child2", { static: false}) contentChild2: ElementRef;
  @ContentChild("child3", { static: false}) contentChild3: ElementRef;
  @ContentChild("child4", { static: false}) contentChild4: ElementRef;
  @ContentChild("child5", { static: false}) contentChild5: ElementRef;
  @ContentChild("child6", { static: false}) contentChild6: ElementRef;
  @ViewChild("childhook", { static: false}) viewChild: ElementRef;
  @ViewChild("childhook1", { static: false}) viewChild1: ElementRef;

@Input() parentData:string;

cr:string[];
subscription:Subscription;
counter;
num:number = 1;

  constructor(private demoService: DemoService) {
    console.log('Constructor called');
    
   }
   ngOnDestroy(): void {
    console.log('HooksComponent ngOnDestroy called');
    clearInterval(this.counter);
    this.subscription.unsubscribe();
  }

   ngAfterViewChecked(): void {
    console.log('HooksComponent ngAfterViewChecked called', this.viewChild);
    this.viewChild.nativeElement.setAttribute('style', `color: ${this.parentData}`);
    this.viewChild1.nativeElement.setAttribute('style', `color: ${this.parentData}`);

  }
  ngAfterViewInit(): void {
    console.log('HooksComponent ngAfterViewInit called', this.viewChild); // call once
    this.viewChild.nativeElement.setAttribute('style', `color: ${this.parentData}`);
  }
   ngAfterContentChecked(): void {
    console.log('HooksComponent ngAfterContentChecked called',this.contentChild );
    this.contentChild.nativeElement.setAttribute('style', `color: ${this.parentData}`);
    this.contentChild2.nativeElement.setAttribute('style', `color: ${this.parentData}`);
    this.contentChild3.nativeElement.setAttribute('style', `color: ${this.parentData}`);
    this.contentChild4.nativeElement.setAttribute('style', `color:${this.parentData}`);
    this.contentChild5.nativeElement.setAttribute('style', `color:${this.parentData}`);
    this.contentChild6.nativeElement.setAttribute('style', `color:${this.parentData}`);
  }
  ngAfterContentInit(): void {
console.log('Hooks ngAfterContentInit Called ', this.contentChild);  //Call Once
this.contentChild.nativeElement.setAttribute('style', `color: ${this.parentData}`);
this.contentChild2.nativeElement.setAttribute('style', `color: ${this.parentData}`);
this.contentChild3.nativeElement.setAttribute('style', `color: ${this.parentData}`);
this.contentChild4.nativeElement.setAttribute('style', `color:${this.parentData}`);
this.contentChild5.nativeElement.setAttribute('style', `color:${this.parentData}`);
this.contentChild6.nativeElement.setAttribute('style', `color:${this.parentData}`);

  }

 
   ngDoCheck(){
    console.log('Hooks ngOnCheck call');
    
   }

   ngOnChanges(changes: SimpleChanges): void {
    console.log( 'HooksComponent ngOnChanges called', changes);
    for (const propname in changes) {
      const prop = changes[propname] // parentData
      console.log(prop);

      const { previousValue, currentValue, firstChange} = prop; // 

      console.log(`Prop name ${propname}`);
      console.log(`Prev value ${previousValue}`);
      console.log(`Current value ${currentValue}`);
      console.log(`First change  ${firstChange}`);

      console.log("---------------------");

    }}

    ngOnInit(): void {

      this.cr= this.demoService.getdata()

      console.log('HooksComponent ngOnInit called');
    
     this.subscription = this.demoService.getUsers().subscribe(res => {
       console.log('users from hooks component', res);
      })
      // this.counter = setInterval(() => {
      //   // this.num = this.num + 1;
      //   console.log(this.num);
      //  }, 1000)
     }
}
