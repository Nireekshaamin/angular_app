import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-sudha1',
  templateUrl: './sudha1.component.html',
  styleUrls: ['./sudha1.component.css']
})
export class Sudha1Component implements OnInit {

  constructor() { }
  onAdd()
  {
    alert("Item added to cart");
  }
  onAdd1()
  {
    alert("Item cannot be added to cart");
  }
  @Input()product:any

  ngOnInit(): void {
  }

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
      content='fa fa-plus';
    }
    else{
      content='fa fa-minus';
    }
    return content;
  }

}