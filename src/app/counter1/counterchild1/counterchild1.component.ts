import { Component, OnInit,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counterchild1',
  templateUrl: './counterchild1.component.html',
  styleUrls: ['./counterchild1.component.css']
})
export class Counterchild1Component implements OnInit {
  counterValue=1;
  countLessThenOne=true;

  @Output() countEmmitter = new EventEmitter();

  PostValue(){
    this.countEmmitter.emit(this.counterValue);
  }

  decrement(){
    if(this.counterValue==1){
      this.countLessThenOne=false;
    }
    else{
      this.countLessThenOne=true;
      this.counterValue--;
    }
    this.PostValue();
  }
  increment(){
    this.counterValue++;
    this.countLessThenOne=true;
    this.PostValue();
  }


  constructor() { }

  ngOnInit(): void {
  }

}
