import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-hooks',
  templateUrl: './hooks.component.html',
  styleUrls: ['./hooks.component.css']
})
export class HooksComponent implements OnChanges {
@Input() parentData:number;
  constructor() {
    console.log('Constructor called');
    
   }

  ngOnChanges(changes : SimpleChanges) : void {
    console.log('Hooks Comp ngONChanges Called ', changes);
    
  }

}
