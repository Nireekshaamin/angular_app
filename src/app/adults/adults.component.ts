import { Component, OnInit } from '@angular/core';
import * as productdetails from '../data/products3.json'

@Component({
  selector: 'app-adults',
  templateUrl: './adults.component.html',
  styleUrls: ['./adults.component.css']
})
export class AdultsComponent implements OnInit {

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