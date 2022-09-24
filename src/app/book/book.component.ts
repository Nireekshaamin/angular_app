import { Component, OnInit,Input } from '@angular/core';
import { CartService } from '../cart.service';
import { Cartitem } from '../cartitem';
//npm install sweetalert2
import Swal from 'sweetalert2';
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  constructor(private cartsvc:CartService) { }

  @Input()product:any
  onAdd()
  {
    alert("Item added to cart");
  }
  onAdd1()
  {
    alert("You'll be notified through your registered email");
  }
  //Add to cart
  cart:Cartitem={
    id:0,
    pname:'',
    pdescription:'',
    price:0,
    img:'',
    quantity:1,
    totalPrice:1    
  }
  quantity:number=0;
  value=1;

  addToCart(product:any){
    this.cart.pname=product.pname;
    this.cart.pdescription=product.pdescription;
    this.cart.price=product.price;
    this.cart.img=product.img;
    this.cart.price=product.price;
    this.cart.totalPrice=product.totalPrice;
    this.cart.quantity=this.quantity;
    this.cart.id=product.id;
    this.cartsvc.addToCart(this.cart);
    console.log(product.id);
    const Toast = Swal.mixin({
      toast: true,
      position: 'top',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
    })

    Toast.fire({
      icon: 'success',
      title: 'Item added successfully'
    })
    this.cartsvc.getCount();
  }



  
 


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

