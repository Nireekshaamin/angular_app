import { Component, OnInit } from '@angular/core';
import * as allprod from "../data/allproducts.json";
import { Test } from '../test';
import { TestService } from '../test.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  test1: Test[]=[];
  //constructor injection of the MicroovenService
  constructor(private testservice:TestService) { }

  ngOnInit(): void {
    const testObservable= this.testservice.getTestDetails();
    testObservable.subscribe((testData: Test[])=>{
      this.test1=testData;
    });
  }

  all:any=(allprod as any).default;

  productDetail=false;

  showproductDetailsToggle()
  {
    this.productDetail=!this.productDetail;
  }

  toggleContent(){
    var content='';
    if(this.productDetail){
      content='fas fa-arrow-down';
    }
    else{
      content='fas fa-arrow-up';
    }
    return content;
  }

}