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
  count = 1;
  // @Input() count?:number;

  receivecount($event: number) {
    this.count = $event;
  }
}



