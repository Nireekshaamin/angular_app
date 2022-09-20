import { Component, OnInit } from '@angular/core';
import * as alldeals from "../books1.json";

@Component({
  selector: 'app-child1',
  templateUrl: './child4.component.html',
  styleUrls: ['./child4.component.css']
})
export class Child1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  all:any=(alldeals as any).default;
}
