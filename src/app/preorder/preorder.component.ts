import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preorder',
  templateUrl: './preorder.component.html',
  styleUrls: ['./preorder.component.css']
})
export class PreorderComponent implements OnInit {

  constructor() { }
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
    

  ngOnInit(): void {
  }


}
