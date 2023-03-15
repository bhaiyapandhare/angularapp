import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CutomerlistComponent } from './cutomerlist/cutomerlist.component';


const customerRoutes : Routes = [
  {path:'', component: CutomerlistComponent}

];

@NgModule({
  imports: [RouterModule.forChild(customerRoutes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
