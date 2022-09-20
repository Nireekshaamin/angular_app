import { Component, OnInit } from '@angular/core';
import * as alldeals from "../nonfiction/books1.json";

@Component({
  selector: 'app-child1',
  templateUrl: './child3.component.html',
  styleUrls: ['./child3.component.css']
})
export class Child1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  all:any=(alldeals as any).default;
}
