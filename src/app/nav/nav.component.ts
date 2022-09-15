import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }
  //STRING INTERPOLATION
  title = 'BookWorm';
  //PROPERTY BINDING
  public logo="https://cdn-icons-png.flaticon.com/512/29/29302.png";
  //EVENT BINDING
  onSearch()
  {
    alert("Post your queries here");
  }
  onPost()
  {
    alert("Query posted successfully");
  }
//Accessing the Search Component
  //Property
  productentered: string=' '  //Laptop

  //Event
  search_product(product_name:string):void{ //Laptop
    if(!product_name)
    {
      this.productentered=' ';
    }
    this.productentered=product_name; //Laptop
    console.log(product_name)
  }

  ngOnInit(): void {
  }

}
