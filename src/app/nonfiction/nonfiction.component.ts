import { Component, OnInit, Input } from '@angular/core';
import * as allprod from "../data/allproducts.json";
import { Nonfiction } from '../nonfiction';
import { NonfictionService } from '../nonfiction.service';
@Component({
  selector: 'app-nonfiction',
  templateUrl: './nonfiction.component.html',
  styleUrls: ['./nonfiction.component.css']
})
export class NonfictionComponent implements OnInit {

  nonfiction1: Nonfiction[]=[];
  //constructor injection of the MicroovenService
  constructor(private nonfictionservice:NonfictionService) { }

  ngOnInit(): void {
    const nonfictionObservable= this.nonfictionservice.getNonfictionDetails();
    nonfictionObservable.subscribe((nonfictionData: Nonfiction[])=>{
      this.nonfiction1=nonfictionData;
    });
  }

  all:any=(allprod as any).default;

 
  onAdd()
  {
    alert("Item added to cart");
  }
  onAdd1()
  {
    alert("Item cannot be added to cart");
  }
  @Input()product:any

  

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