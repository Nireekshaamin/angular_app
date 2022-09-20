import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter1',
  templateUrl: './counter1.component.html',
  styleUrls: ['./counter1.component.css']
})
export class Counter1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  count:number=1;
  receiveValue($event:number){
    this.count=$event;
  }
}



