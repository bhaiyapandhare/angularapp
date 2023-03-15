import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FashiondetComponent } from './fashiondet/fashiondet.component';
import { FashiongentsComponent } from './fashiongents/fashiongents.component';
import { FashionladiesComponent } from './fashionladies/fashionladies.component';
import { RouterModule } from '@angular/router';
import { UtilityModule } from '../shared/utility/utility.module';



@NgModule({
  declarations: [FashiondetComponent, FashiongentsComponent, FashionladiesComponent],
  imports: [
    CommonModule,
    RouterModule,
    UtilityModule
  ]
})
export class FashionModule { }
