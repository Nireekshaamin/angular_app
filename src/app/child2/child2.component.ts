import { Component, OnInit } from '@angular/core';
import * as alldeals from "../books1.json";
//import * as allprod from "../data/allproducts.json";
import { Child2 } from './child2';
import { Child2Service } from '../child2.service';


@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

  child21: Child2[]=[];
  constructor(private child2service:Child2Service) { }

  ngOnInit(): void {
    const child2Observable= this.child2service.getChild2Details();
    child2Observable.subscribe((child2Data: Child2[])=>{
      this.child21=child2Data;
    });
  }
  all:any=(alldeals as any).default;
  productDetail=false;
  //Event to perform the toggle effect
  showproductDetailsToggle()
  {
    this.productDetail=!this.productDetail;
  }
  //function to toggle between the span content from + to - and vice versa
  //and bind the function to [ngClass]
  toggleContent(){
    var content='';
    if(this.productDetail){
      content='fa-solid fa-arrow-up';
    }
    else{
      content='fa-solid fa-arrow-down';
    }
    return content;
  }

}
