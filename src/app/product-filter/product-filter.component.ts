import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent implements OnInit {
  namesearch:string='';
  productArr:any[]=[
    {sno:'1' ,  name: 'Mobile', price:5000, avaibility:'Available'},
    {sno:'2' ,  name: 'watch', price:2000, avaibility:'Not-Available'},
    {sno:'3' ,  name: 'camera', price:15000, avaibility:'Not-Available'},
    {sno:'4' ,  name: 'laptop', price:5000, avaibility:'Available'},

  ]
  constructor() { }

  ngOnInit() {
  }

}
