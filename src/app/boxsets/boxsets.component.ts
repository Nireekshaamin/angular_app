import { Component, OnInit } from '@angular/core';
import * as productdetails from '../data/products1.json'

@Component({
  selector: 'app-boxsets',
  templateUrl: './boxsets.component.html',
  styleUrls: ['./boxsets.component.css']
})
export class BoxsetsComponent implements OnInit {

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