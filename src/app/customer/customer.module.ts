import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CutomerlistComponent } from './cutomerlist/cutomerlist.component';
import { CustomerRoutingModule } from './customer-routing.module';


@NgModule({
  declarations: [CutomerlistComponent],
  imports: [
    CommonModule,
    CustomerRoutingModule
  ]
})
export class CustomerModule {
  constructor(){

    console.log('CustomerModule called');
    
  }
  
}

 
