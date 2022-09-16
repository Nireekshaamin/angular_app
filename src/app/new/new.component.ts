import { Component, OnInit } from '@angular/core';
import * as productdetails from '../data/products.json'

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

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