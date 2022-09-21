import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home1',
  templateUrl: './home1.component.html',
  styleUrls: ['./home1.component.css']
})
export class Home1Component implements OnInit {

  constructor() { }
  //TWO-WAY BINDING
  name="John"
  //STRING INTERPOLATION
 title = 'BookWorm';

  onAdd()
 {
   alert("Item added to cart");
 }
//Array-ngFor
Products:any[]=[
 {
   "productname":"Novel Books"
 },
 {
   "productname":"Fiction Books"
 },
 {
   "productname":"Non Fiction Books"
 },
 {
   "productname":"Story Books"
 }

]
 //event to hide products
 isVisible:boolean=false;
 showhide_products(){
   this.isVisible=!this.isVisible;
 } 
 
product="novel"
errorcolor:string="red"

price:number | undefined;
price1:number | undefined;
price2:number | undefined;
price3:number | undefined;
price4:number | undefined;
price6:number | undefined;
 ngOnInit(): void {
   this.price=427;
   this.price1=599;
   this.price2=1099;
   this.price3=540;
   this.price6=290;
   this.price4=540;
 }

}
