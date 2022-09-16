import { Component, OnInit } from '@angular/core';
import * as productdetails from '../data/products2.json'
@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.css']
})
export class ChildrenComponent implements OnInit {

  constructor() { }
  onAdd()
  {
    alert("Item added to cart");
  }
  onAdd1()
  {
    alert("Item cannot be added to cart");
  }

  price:number | undefined;
  ngOnInit(): void {
    
  }

product:any = (productdetails as any).default;

}