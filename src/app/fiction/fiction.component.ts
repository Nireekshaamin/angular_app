import { Component, OnInit } from '@angular/core';
import * as productdetails from '../data/product4.json'
@Component({
  selector: 'app-fiction',
  templateUrl: './fiction.component.html',
  styleUrls: ['./fiction.component.css']
})
export class FictionComponent implements OnInit {

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