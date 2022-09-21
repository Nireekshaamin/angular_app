import { Component, OnInit,Output,Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counterchild1',
  templateUrl: './counterchild1.component.html',
  styleUrls: ['./counterchild1.component.css']
})
export class Counterchild1Component implements OnInit {
  @Input() counterValue: number = 1;
  countLessThenOne = true;
  @Output() countEmitter = new EventEmitter();
  @Output() quantityEmitter = new EventEmitter();
  PostData() {
    this.countEmitter.emit(this.counterValue);
    this.quantityEmitter.emit(this.counterValue);
  }

  //increment and decrement 

  //Quantity -> 10
  decrement() {
    if (this.counterValue == 1) {
      this.countLessThenOne = false;
    }
    else {
      this.countLessThenOne = true;
      this.counterValue--;
    }
    this.PostData();
  }

  increment() {
    this.counterValue++;
    this.countLessThenOne = true;
    this.PostData();
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}