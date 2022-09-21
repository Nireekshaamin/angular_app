import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private authService:UserService) { }
   //TWO-WAY BINDING
   name="John"
   //STRING INTERPOLATION
  title = 'BookWorm';
  auth:boolean=false;
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
    this.authService.authSubject.subscribe(
      data => 
      {
        console.log('auth inside nav component: ' + data);
        this.auth = data;
      }
    );
    this.price=427;
    this.price1=599;
    this.price2=1099;
    this.price3=540;
    this.price6=290;
    this.price4=540;
   
  }
  }


